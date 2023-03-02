import Image from 'next/image'
import classes from './hero.module.css'

export default function Hero(){
    
    return(
        <section className={ classes.hero }>
            <div className={ classes.image } >
                <Image src='/images/site/ali_image.JPG' alt='My image' height={300} width={300} />
            </div>
            <h1>Hi, I'm Ali</h1>
            <p>
                I blog about web development - especially frontend frameworks like React or NextJS.
            </p>

        </section>
    )
}