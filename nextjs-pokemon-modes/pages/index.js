import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

// SSG (Static Site Generation)

export async function getStaticProps(){
  const res = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");

  return {
    props: {
      pokemon: await res.json()
    }
  }
}

// SSR (Server Side Rendering) 

// export async function getServerSideProps(){
//   const res = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");

//   return {
//     props: {
//       pokemon: await res.json()
//     }
//   }
// }

export default function Home({ pokemon }) {

  //  CSR (Client-Side Rendering)(İstemci)

  // const [pokemon, setPokemon] = useState([]);

  // useEffect( () => {
  //   async function getPokemon(){
  //     const res = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
  //     setPokemon( await res.json() );
  //   }
  //   getPokemon();
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>

      <div>Pokemon List</div>

      <div className={styles.grid} > 

        {
          pokemon.map( (pokemon) => (
            <div className={styles.card} key={pokemon.id}>
              <Link href={`pokemon/${pokemon.id}`}>
                <a>
                  <img 
                    src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                    // src={pokemon.image}
                    alt={pokemon.name}
                  />
                  <h3>{pokemon.name}</h3>
                </a>
              </Link> 

            </div>
          ))
        }        
      </div>

    </div>
  )
}
