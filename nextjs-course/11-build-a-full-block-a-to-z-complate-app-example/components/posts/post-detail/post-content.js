import ReactMarkdown from 'react-markdown'
import PostHeader from './post-header'
import classes from './post-content.module.css'
import Image from 'next/image'



export default function PostContent(props){

    const { post } = props

    const imagePath = `/images/posts/${post.slug}/${post.image}`

    // ![Create routes via your file + folder structure](nextjs-file-based-routing.png)
    const customRenderers = {
        // img(image) {
        //     return (
        //         <Image
        //             src={`/images/posts/${post.slug}/${image.src}`} //(nextjs-file-based-routing.png)
        //             alt={image.alt}  //![Create routes via your file + folder structure]
        //             height={300}
        //             width={600}
        //         />
        //     );
        // },

        // markdown img i p etiketi içinde döer. Bundan kurtulmak için aiağıdaki yöntem kullanılabilir.
        p(par){
            const { node } = par
            
            if( node.children[0].tagName === 'img' ){   
                const image = node.children[0]

                return(
                    <div className={classes.images}>
                        <Image
                            src={`/images/posts/${post.slug}/${image.properties.src}`} 
                            alt={image.properties.alt}
                            height={300}
                            width={600}
                        />
                    </div>
                )
            }

            // img harici içerikleri (paragraf) dönmek için
            return(
                <p>{ par.children }</p>
            )
        }
    }
    
    return(
        <article className={classes.content}>
            <PostHeader image={imagePath} title={post.title} />
            <ReactMarkdown components={ customRenderers } >{post.content}</ReactMarkdown>
        </article>
    )
}