import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react";
// npm i swr
import useSWR from "swr";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
// import { getFilteredEvents } from "../../dumy-data";
import { getFilteredEvents } from "../../helpers/api-util";
import ErrorAlert from "../../components/events/ErrorAlert";

function FilteredEventsPage( props ) {

  const [ loadedEvents, setLoadedEvents ] = useState();

  const router = useRouter();

  const filteredData = router.query.slug;  // [year, month]

  const { data, error } = useSWR( "https://s6-events-data-default-rtdb.firebaseio.com/events.json" );

  useEffect( () => {

    if(data){
    
      const events = []
    
      for( const key in data ){
        events.push({
          id: key,
          ...data[key],
        });
      }

      setLoadedEvents( events );
   
    }


  }, [data] );

  // if( !loadedEvents ){
  //   return(
  //     <p className="center" >Loading...</p>
  //   )
  // }

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
    numMonth < 1 ||
    error  // useSWR

    // props.hasError

   ){
    return(
      <ErrorAlert message="Invalid filter. Please adjust your values!" />
    )
   }

  //  const filteredEvents = getFilteredEvents({
  //   year: numYear,
  //   month: numMonth,
  //  });
  //  const filteredEvents = props.events;

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

   if( !filteredEvents || filteredEvents.length === 0 ){
    return(
      <ErrorAlert message="No event found for the chosen filter!"/>
    )
   }

   const date = new Date( numYear, numMonth - 1);
  //  const date = new Date( props.date.year, props.date.month - 1);

  return (
    <Fragment>
      <ResultsTitle date={ date } />
      <EventList items={ filteredEvents } />
    </Fragment>
  )
}

// export async function getServerSideProps( context ){

//   const { params } = context;

//   const filteredData = params.slug;

//   const filteredYear = filteredData[0];
//   const filteredMonth = filteredData[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if( 
//     isNaN( numYear ) ||
//     isNaN( numMonth ) ||
//     numYear > 2030 ||
//     numYear < 2011 ||
//     numMonth > 12 ||
//     numMonth < 1
//    ){
//     return{
     
//       // <ErrorAlert message="Invalid filter. Please adjust your values!" />

//       // notFound: true,

//       // redirect:{
//       //   destination: "/errorPage"   // Bir hata sayfası hazırlanıp buraya verilebilir.
//       // }

//       props:{ hasError: true } // en iyi yol olabilir.

//     }
//    }

//    const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//    });

//   return{
//     props: {
//       events: filteredEvents,
//       date:{
//           year: numYear,
//           month: numMonth
//       }
//     }
//   }
// }

export default FilteredEventsPage
