import Image from 'next/image'
import classes from './hero.module.css'

export default function Hero(){

    // Resim için URL dizesi döndürelim
    const myLoader = ({ src, width, quality }) => {
        return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
      }

    // İşlemden önce URL: src="/_next/image?url=%2Fimages%2Fsite%2Fali_image.JPG&w=640&q=75"
    
    // işlemden sonra URL: "http://localhost:3000//images/site/ali_image.JPG?w=640&q=75"
    
    return(
        <section className={ classes.hero }>
            <div className={ classes.image } >
                <Image
                    // loader={myLoader} 
                    src='/images/site/ali_image.JPG' 
                    alt='My image' 
                    height={300} 
                    width={300} />  
            </div>
            <h1>Hi, I'm Ali</h1>
            <p>
                I blog about web development - especially frontend frameworks like React or NextJS.
            </p>

        </section>
    )
}11