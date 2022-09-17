import { useRouter } from "next/router";
import { getEventById } from "../../dumy-data";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventContent from "../../components/event-detail/EventContent";

function EventDetailPage() {

  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById( eventId );

  if( !event ){
    return(
      <p>No Event Found!</p>
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

export default EventDetailPage
