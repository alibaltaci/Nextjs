import { useRouter } from "next/router"
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dumy-data";


function FilteredEventsPage() {

  const router = useRouter();

  const filteredData = router.query.slug;  // [year, month]

  if( !filteredData ){
    return(
      <p className="center" >Loading...</p>
    )
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if( 
    isNaN( numYear ) ||
    isNaN( numMonth ) ||
    numYear > 2030 ||
    numYear < 2011 ||
    numMonth > 12 ||
    numMonth < 1
   ){
    return(
      <p className="center" >Invalid filter. Please adjust your values!</p>
    )
   }

   const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
   });

   if( !filteredEvents || filteredEvents.length === 0 ){
    return(
      <p className="center" >No event found for the chosen filter!</p>
    )
   }

  return (
    <div>
        <EventList items={ filteredEvents } />
    </div>
  )
}

export default FilteredEventsPage
