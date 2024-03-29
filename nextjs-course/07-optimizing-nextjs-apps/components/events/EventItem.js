import Image from "next/image"

import Link from "next/link";
import classes from "./EventItem.module.css"
import Button from "../ui/Button";

// icons
import DateIcon from "../icons/DateIcon"
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

function EventItem( props ) {
  
    const { image, title, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString( "en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    } );

    console.log( humanReadableDate );

    const formattedAddress = location.replace(", ", "\n");

    const exploreLink = `/events/${id}`
  
    return (
    <li className={ classes.item } >
        {/* <img src={ "/" + image } alt={ title } /> */}

        <Image src={ "/" + image } alt={ title } width={ 250 } height={ 160 } />
        
        <div className={ classes.content } >
            <div className={ classes.summary } >
                <h2>{ title }</h2> 
                <div className={ classes.date } >
                    <DateIcon />
                    <time>{ humanReadableDate }</time>
                </div>
                <div className={ classes.address } >
                    <AddressIcon />
                    <address>{ formattedAddress }</address>
                </div>
            </div>
            <div className={ classes.actions } >
                {/* <Link href={ exploreLink } >Explore Event</Link> */}
                <Button link={ exploreLink } >
                    <span>Explore Event</span>
                    <span className={ classes.icon } >
                        <ArrowRightIcon />
                    </span>
                </Button>
            </div>
        </div>
    </li>
  )
}

export default EventItem
