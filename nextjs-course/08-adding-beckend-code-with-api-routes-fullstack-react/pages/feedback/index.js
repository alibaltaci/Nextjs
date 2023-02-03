import { extractFeedback, buildFeedbackPath } from "../api/feedback"

export default function FeedbackPage ( props ){
    const { feedbackItems } = props
    return(
        <ul>
            {
                feedbackItems.map( item => (
                    <li key={ item.id }> { item.text } </li>
                ) )
            }
        </ul>
    )
}

// işle  aynı bilgisayarda olduğu için fetch yapmaya gerek yok.
// datayı direkt içe aktarıp kullanabiliriz.
export async function getStaticProps(){

    const filePath = buildFeedbackPath();
    const data = extractFeedback( filePath );

    return{
        props:{
            feedbackItems: data
        }        
    }

}