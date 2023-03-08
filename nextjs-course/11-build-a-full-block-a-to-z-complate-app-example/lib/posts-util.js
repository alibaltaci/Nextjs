import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// const fs = require('fs');

const postsDirectory = path.join( process.cwd(), 'posts' )

export function getPostData( fileName ){
    
    const postSlug = fileName.replace(/\.md$/, '') // removes the file extension

    const filePath = path.join( postsDirectory, `${postSlug}.md` )
    const fileContent = fs.readFileSync( filePath, 'utf-8' ) //unicode karakterleri desteklemek için ikinci argüman
    const { data, content } = matter( fileContent )

    const postData = {
        slug: postSlug,
        ...data,
        // content: content
        content,
    }
    
    return postData
}

// sadece isimleri almak için bir fonksiyon
export function getPostsFiles(){  
    return fs.readdirSync( postsDirectory ) // tüm içeriği eşzamanlı olarak okuyacak
}

export function getAllPosts(){
    const postFiles =  getPostsFiles()  

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