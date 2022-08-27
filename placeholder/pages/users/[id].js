import {useRouter} from "next/router";
import React, {useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

// SSG

export async function getStaticPaths(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

    const users = await res.json();

    return{
        paths: users.map( ( user ) => ({
            params: {id: user.id.toString() },
        })),
        fallback: false, // fallback: true, false or "blocking" 
    }

}


export async function getStaticProps( {params} ){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);

    return{
        props:{
            user: await res.json() 
        },

        revalidate: 30, // zaman aralığında güncellenecek
    }
}
// SSR

// export async function getServerSideProps( {params} ){
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);

//     return {
//       props: {
//         user: await res.json()
//       }
//     }
// }

export default function Details( {user} ){

    // CSR

    // const {query : {id}} = useRouter();
    
    // const [user, setUser] = useState(null);

    // useEffect( () => {
    //     async function getUser() {
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    //         setUser(await res.json() );
    //     }
    //     if(id){
    //         getUser();
    //     }
    // },[id]);

    // if(!user){
    //     return null
    // }

    return(
        <div>

           Name: {user.name}<br/>
           Username: {user.username}<br/>
           E-mail: {user.email}<br/>
           Phone: {user.phone}<br/>
           Website: {user.website}<br/>

        </div>
    )
}