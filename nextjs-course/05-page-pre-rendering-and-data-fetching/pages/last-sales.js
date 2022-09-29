import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage( props ){

    // Client Side Rendering

    // const [ sales, setSales ] = useState();

    // const [ loading, setLoading ] = useState( false );

    // useEffect( () => {

    //     setLoading( true )

    //     fetch( "https://client-side-data-default-rtdb.firebaseio.com/sales.json" )
    //     .then( res => res.json() )
    //     .then( data => {

    //         console.log( data );

    //         const trasformedSales = [];

    //         for ( const key in data  ){
    //             trasformedSales.push( { 
    //                 id: key,
    //                 username: data[key].username,
    //                 volume: data[key].volume,
    //              } )
    //         }

    //         setSales( trasformedSales );
    //         setLoading( false );

    //         console.log( trasformedSales );

    //     });

    // }, [] );


    // if( loading ){
    //     return(
    //         <p>Loading...</p>
    //     )
    // }

    // if( !sales ){
    //     return(
    //         <p>No data yet!</p>
    //     )
    // }

    // useSWR

    // const [ sales, setSales ] = useState();
    const [ sales, setSales ] = useState( props.sales ); //CSR & SSR

    const fetcher = (url) => fetch(url).then((res) => res.json());

    const { data, error } = useSWR( "https://client-side-data-default-rtdb.firebaseio.com/sales.json", fetcher );

    useEffect( () => {

        if( data ){
            const transformedSales = [];

            for( const key in data){
                transformedSales.push( {
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume,
                } )
            }

            setSales( transformedSales );
        }
    }, [ data ] );

    if( error ){
        return(
            <p>Failed to load!</p>
        )
    }

    if( !data && !sales){
        return(
            <p>Loading...</p>
        )
    }

    return(
        <ul>
            {
                sales.map( sale => (
                    <li key={ sale.id } >
                        { sale.username } - ${ sale.volume }
                    </li>
                ) )
            }
        </ul>
    )

}

// CSR & SSR

export async function getStaticProps( ){
    // return fetch( "https://client-side-data-default-rtdb.firebaseio.com/sales.json" )
    // .then( res => res.json)
    // .then( data => {

        const res = await fetch( "https://client-side-data-default-rtdb.firebaseio.com/sales.json" )

        const data = await res.json();
        
        const transformedSales = [];

        for ( const key in data ){
            transformedSales.push({
                id: key,
                username: data[key].username,
                volume: data[key].volume,
            });
        }

        return({
            props: {
                sales: transformedSales
            },
    
            // revalidate: 10
        })
    // })
}

export default LastSalesPage;

