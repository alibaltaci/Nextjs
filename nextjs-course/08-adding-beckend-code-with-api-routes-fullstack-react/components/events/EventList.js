import EventItem from "./EventItem";
import classed from "./EventList.module.css";

function EventList( props ) {

    const { items } = props;

  return (
    <ul className={ classed.list } >
        {
            items.map( item => (
                <EventItem
                    key={ item.id }
                    id={ item.id }
                    title={ item.title }
                    location={ item.location }
                    data={ item.date }
                    image={ item.image }
                />
            ) )
        }
    </ul>
  )
}

export default EventList
