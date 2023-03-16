import ReactMarkdown from 'react-markdown'
import PostHeader from './post-header'
import classes from './post-content.module.css'
import Image from 'next/image'

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter' //657.9k
// yukarıdaki büyük boyutlu paket yerine
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

// import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism' //156.6k
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'

// küçük boyutlu paketleri import ettiğimiz için dilleri de import etmemiz lazım
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

// kullanmak istediğimiz tüm dilleri aşağıdaki şekilde kaydediyoruz.
SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

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
        },

        code(code){

            const { className, children } = code 

            const language = className.split('-')[1] // className is something like language-js => We need the "js" part here

            return(
                <SyntaxHighlighter
                    style={atomDark}
                    language={language}  // ```js
                    children={children}
                />
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