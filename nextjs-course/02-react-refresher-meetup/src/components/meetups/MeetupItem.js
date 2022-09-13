import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

import { useContext } from "react";

import FavoritesContext from "../../store/favorites-context";

function MeetupItem( props ) {

    const favoritesCtx = useContext( FavoritesContext );

    const itemIsFavorites = favoritesCtx.itemIsFavorite( props.id );

    function toggleFavoriteStatusHandler(){

        if( itemIsFavorites ){
            favoritesCtx.removeFavorite( props.id );

            console.log( props.id );

            fetch(
                `https://react-meetup-464df-default-rtdb.firebaseio.com/meetup-keys.json`,
                {
                    method: "DELETE",
                })
        }else{

            fetch(
                "https://react-meetup-464df-default-rtdb.firebaseio.com/meetup-keys.json",
                {
                    method: "POST",
                    body: JSON.stringify( { 
                        key: props.id 
                    } ),
                    headers:{ 
                        "Content-Type": "aplication/json"
                    }
                })

            favoritesCtx.AddFavorite( {
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            } )
        }
    }

    function deleteMeetupFromFirebase(){

        console.log( props.id );

        fetch(
            `https://react-meetup-464df-default-rtdb.firebaseio.com/meetups/${props.id}.json`,
            {
                method: "DELETE",
            }
        ).then( () => {
            window.location.reload(false);
        })
    }


  return (
    <li className={classes.item}>

        <Card>

            <div className={classes.image}>
                <img src={ props.image } alt={ props.title } />
            </div>
            <div className={classes.content}>
                <h3>{ props.title }</h3>
                <address>{ props.address }</address>
                <p>{ props.description }</p>
            </div>
            <div className={classes.actions}>
                <button className={ classes.primaryButton } onClick={ toggleFavoriteStatusHandler } >{ itemIsFavorites ? "Remove From Favorites" : "To Favorites" }</button>
                <button className={ classes.dangerButton} onClick={ deleteMeetupFromFirebase } >Delete</button>
            </div>

        </Card>

    </li>
  )
}

export default MeetupItem;
