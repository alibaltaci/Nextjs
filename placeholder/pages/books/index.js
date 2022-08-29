import Head from 'next/head'
import React from 'react'
import Link from 'next/link';

export async function getStaticProps(){
    const res = await fetch("http://localhost:3000/api/books");

    return{
        props: {
            books: await res.json()
        }
    }
}

function Books( { books } ) {

    return (
        <div>
          <Head>
            <title>Books</title>
          </Head>
    
          <div> List </div>
          <hr/>
    
          <div>
              {
                books.map( (book) => (
                  <div key={book.id}>
                    <Link href={`books/${book.id}`}>
                      <div>Name: {book.name}</div>
                    </Link>
                  </div>
                ))
              }
          </div>
        </div>
      )
}

export default Books
