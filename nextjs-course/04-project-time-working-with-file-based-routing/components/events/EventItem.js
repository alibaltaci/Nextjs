import Link from "next/link";
import classed from "./EventItem.module.css"

function EventItem( props ) {
  
    const { image, title, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString( "en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    } );

    const formattedAddress = location.replace(", ", "\n");

    const exploreLink = `/events/${id}`
  
    return (
    <li className={ classed.item } >
        <img src={ "/" + image } alt={ title } />
        <div className={ classed.content } >
            <div className={ classed.summary } >
                <h2>{ title }</h2> 
                <div className={ classed.date } >
                    <time>{ humanReadableDate }</time>
                </div>
                <div className={ classed.address } >
                    <address>{ formattedAddress }</address>
                </div>
            </div>
            <div className={ classed.actions } >
                <Link href={ exploreLink } >Explore Event</Link>
            </div>
        </div>
    </li>
  )
}

export default EventItem
