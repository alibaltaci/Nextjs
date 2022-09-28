import path from "path";
import fs from "fs/promises";
import Link from "next/link";

export async function getStaticProps( context ){

  const filePath = path.join( process.cwd(), "data", "dummy-backend.json"); // /data/dummy-data.json

  const joinData =  await fs.readFile(filePath);

  const data = JSON.parse(joinData);

  console.log( "Static Generation" );

  if( !data ){
    return({
      redirect:{
        destination: "/"
      }
    })
  }

  if( data.products.length === 0 ){
    return({
      notFound: true
    })
  }

  return({
    props:{
      products: data.products,
    },
    revalidate: 1,
})
}

export default function HomePage( { products } ) {

  // console.log( products );

  return (
    <div>
      <ul>
        {
          products.map( ( product ) => (
            <li key={ product.id }>
              <Link href={`/products/${product.id}`} >
                { product.title }
              </Link>
            </li>
           ))
        }
      </ul>
    </div>
  )
}


