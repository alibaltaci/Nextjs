import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from "next/link"

// SSG

export async function getStaticProps(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  return {
    props: {
      users: await res.json()
    }
  }
}

// SSR (Server Side Rendering)

// export async function getServerSideProps(){
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");

//   return {
//     props: {
//       users: await res.json()
//     }
//   }
// }

export default function Home( { users } ) {

  // CSR (Client Side Rendering)

  // const [users, setUsers] = useState([]);

  // useEffect( () => {
  //   async function getUsers(){
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     setUsers( await res.json() );
  //   }
  //   getUsers();
  // }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>JSON Placeholder</title>
      </Head>

      <div> List</div>
      <hr/>

      <div>
          {
            users.map( (user) => (
              <div key={user.id}>
                <Link href={`users/${user.id}`}>
                  <div>{user.name}</div>
                </Link>
              </div>
            ))
          }
      </div>
    </div>
  )
}
