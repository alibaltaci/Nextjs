import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join( process.cwd(), 'data' )

function getPostData( fileName ){
    const filePath = path.join( postsDirectory, fileName )
    const fileContent =  fs.readdirSync( filePath, 'utf-8' ) //unicode karakterleri desteklemek için ikinci argüman
    const { data, content } = matter( fileContent )

    const postSlug = fileName.replace(/\.md$/, '') // removes the file extension

    const postData = {
        slug: postSlug,
        ...data,
        // content: content
        content,
    }
}

export function getAllPosts(){
    const postFiles = fs.readdirSync( postsDirectory )    // tüm içeriği eşzamanlı olarak okuyacak

    // for( const postFile of postFiles){
    //     const postData = getPostData( postFile )
    // }

    const allPosts = postFiles.map( postFile => {
        return getPostData( postFile )
    } )

    const sortedPosts = allPosts.sort( (postA, postB) => postA.date > postB.date ? -1 : 1 )

    return sortedPosts
}

export function getFeaturedPosts(){
    const allPosts = getAllPosts()

    const featuredPosts = allPosts.filter( post => post.isFeatured )

    return featuredPosts
}