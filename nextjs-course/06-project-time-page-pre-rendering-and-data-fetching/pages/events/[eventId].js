// import { useRouter } from "next/router";

// import { getEventById } from "../../dumy-data";
import { getEventById, getAllEvents } from "../../helpers/api-util";

import { Fragment } from "react";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventContent from "../../components/event-detail/EventContent";
import ErrorAlert from "../../components/events/ErrorAlert";

function EventDetailPage( props ) {

  // const router = useRouter();

  // const eventId = router.query.eventId;

  // const event = getEventById( eventId );
  const event = props.selectedEvent;

  if( !event ){
    return(
      <ErrorAlert message="No Event Found!" />
      // <p>No Event Found!</p>
    )
  }

  return (
    <Fragment>
      <EventSummary title={ event.title } />
      <EventLogistics
        date={ event.date }
        address={ event.location }
        image={ event.image }
        imageAlt={ event.title }
      />
      <EventContent description={ event.description } />
    </Fragment>
  )
}

export async function getStaticProps( context ){
  const eventId = context.params.eventId;

  const event = await getEventById( eventId )

  return {
    props:{
      selectedEvent: event
    }
  }
}

export async function getStaticPaths(){

  const events = await getAllEvents();

  const paths = events.map( event => ({ params: { eventId: event.id } }) ); // [ id1, id2, id3, ... ]

  
  return{
    paths: paths,
    fallback: false
  }
}

export default EventDetailPage
