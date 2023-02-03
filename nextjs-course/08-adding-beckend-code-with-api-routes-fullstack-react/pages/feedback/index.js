import { Fragment, useState } from "react"
import { extractFeedback, buildFeedbackPath } from "../api/feedback"

export default function FeedbackPage ( props ){
    
    const { feedbackItems } = props

    const [ feedbackData, setFeedbackData ] = useState() 

    // const [ feedbackBoolean, setFeedbackBoolean ] = useState( false )

    function loadedFeedbackHandler( id ){
        fetch( `/api/${id}` )
        .then( res => res.json() )
        .then( data => setFeedbackData( data.feedback ) )
    }

    return(
        <Fragment>
            { feedbackData && <p>{ feedbackData.email }</p> }
            <ul>
                {
                    feedbackItems.map( item => (
                        <li key={ item.id }> 
                            { item.text  } 
                            <button onClick={ loadedFeedbackHandler.bind( null, item.id ) } >Show Details</button> 

                            {/* geliştirilebilir */}
                            {/* <button onClick={ () => feedbackBoolean ? setFeedbackBoolean( false ):setFeedbackBoolean( true ) } >Show Details</button> 
                            { feedbackBoolean && <p>{ item.email }</p> } */}
                        </li>
                    ) )
                }
            </ul>
        </Fragment>
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