import { useRouter } from "next/router"
import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
// import { getFilteredEvents } from "../../dumy-data";
import { getFilteredEvents } from "../../helpers/api-util";
import ErrorAlert from "../../components/events/ErrorAlert";

function FilteredEventsPage( props ) {

  const router = useRouter();

  // const filteredData = router.query.slug;  // [year, month]

  // if( !filteredData ){
  //   return(
  //     <p className="center" >Loading...</p>
  //   )
  // }

  // const filteredYear = filteredData[0];
  // const filteredMonth = filteredData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  if( 
    // isNaN( numYear ) ||
    // isNaN( numMonth ) ||
    // numYear > 2030 ||
    // numYear < 2011 ||
    // numMonth > 12 ||
    // numMonth < 1

    props.hasError

   ){
    return(
      // <Fragment>
      //   <ErrorAlert>
      //     <p>Invalid filter. Please adjust your values!</p>
      //   </ErrorAlert>
      //   <div className="center" >
      //     <Button link="/events" >Show All Events</Button>
      //   </div>
      // </Fragment>
      
      <ErrorAlert message="Invalid filter. Please adjust your values!" />
    )
   }

  //  const filteredEvents = getFilteredEvents({
  //   year: numYear,
  //   month: numMonth,
  //  });
   const filteredEvents = props.events;

   if( !filteredEvents || filteredEvents.length === 0 ){
    return(
      <ErrorAlert message="No event found for the chosen filter!"/>
    )
   }

  //  const date = new Date( numYear, numMonth - 1);
   const date = new Date( props.date.year, props.date.month - 1);

  return (
    <Fragment>
      <ResultsTitle date={ date } />
      <EventList items={ filteredEvents } />
    </Fragment>
  )
}

export async function getServerSideProps( context ){

  const { params } = context;

  const filteredData = params.slug;

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
    return{
     
      // <ErrorAlert message="Invalid filter. Please adjust your values!" />

      // notFound: true,

      // redirect:{
      //   destination: "/errorPage"   // Bir hata sayfası hazırlanıp buraya verilebilir.
      // }

      props:{ hasError: true } // en iyi yol olabilir.

    }
   }

   const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
   });

  return{
    props: {
      events: filteredEvents,
      date:{
          year: numYear,
          month: numMonth
      }
    }
  }
}

export default FilteredEventsPage
