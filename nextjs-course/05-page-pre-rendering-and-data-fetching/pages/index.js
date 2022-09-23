import path from "path";
import fs from "fs/promises";

export async function getStaticProps(){

  const filePath = path.join( process.cwd(), "data", "dummy-backend.json"); // /data/dummy-data.json

  const joinData =  await fs.readFile(filePath);

  const data = JSON.parse(joinData);

  return({
    props:{
      products: data.products,
    },
    revalidate: 10
})
}

export default function HomePage( { products } ) {

  console.log( products );

  return (
    <div>
      <ul>
        {
          products.map( ( product ) => (
            <li key={ product.id }>
              { product.title }
            </li>
           ))
        }
      </ul>
    </div>
  )
}


