import React from 'react'

export async function getStaticPaths(){
    const res = await fetch(`http://localhost:3000/api/books`);

    const books = await res.json();

    return{
        paths: books.map( (book) => ({
            params: {id: book.id.toString() },
        })),
        fallback: false,
    }
}

export async function getStaticProps( {params} ){
    const res = await fetch(`http://localhost:3000/api/books/${params.id}`);

    return{
        props: {
            book: await res.json()
        },

        revalidate: 30,
    }
}

function BookDetail( { book } ) {
  return (
    <div>
      Name: {book.name}<br/><br/>
      Author: {book.author}<br/><br/>
      Summary: {book.summary}<br/><br/>
    </div>
  )
}

export default BookDetail
