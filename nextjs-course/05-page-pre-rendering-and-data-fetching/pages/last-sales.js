import { useEffect, useState } from "react";

function LastSalesPage(){

    const [ sales, setSales ] = useState();

    const [ loading, setLoading ] = useState( false );

    useEffect( () => {

        setLoading( true )

        fetch( "https://client-side-data-default-rtdb.firebaseio.com/sales.json" )
        .then( res => res.json() )
        .then( data => {

            console.log( data );

            const trasformedSales = [];

            for ( const key in data  ){
                trasformedSales.push( { 
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume,
                 } )
            }

            setSales( trasformedSales );
            setLoading( false );

            console.log( trasformedSales );

        });

    }, [] );


    if( loading ){
        return(
            <p>Loading...</p>
        )
    }

    // if( !sales ){
    //     return(
    //         <p>No data yet!</p>
    //     )
    // }

    if( sales ){
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

}

export default LastSalesPage;