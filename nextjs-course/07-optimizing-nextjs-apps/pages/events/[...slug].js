import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react";
// npm i swr
import useSWR from "swr";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import { getFilteredEvents } from "../../helpers/api-util";
import ErrorAlert from "../../components/events/ErrorAlert";
import Head from "next/head";

function FilteredEventsPage( props ) {

  const [ loadedEvents, setLoadedEvents ] = useState();

  const router = useRouter();

  const filteredData = router.query.slug;  // [year, month]

  // const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR( "https://s6-events-data-default-rtdb.firebaseio.com/events.json");
  
  console.log( "data -->", data);
 
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

  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={ `A list of filtered events.` }
      />
    </Head>
  )

  if( !loadedEvents ){
    return(
      <Fragment>
        { pageHeadData }
        <p>Loading...</p>
      </Fragment>
    )
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={ `All events for ${ numMonth }/${ numYear }.` }
      />
    </Head>
  )

  if( 
    isNaN( numYear ) ||
    isNaN( numMonth ) ||
    numYear > 2030 ||
    numYear < 2011 ||
    numMonth > 12 ||
    numMonth < 1 ||
    error  // useSWR
   ){
    return(
      <Fragment>
        { pageHeadData }
        <ErrorAlert message="Invalid filter. Please adjust your values!" />
      </Fragment>
    )
   }
  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

   if( !filteredEvents || filteredEvents.length === 0 ){
    return(
      <Fragment>
        { pageHeadData }
        <ErrorAlert message="No event found for the chosen filter!"/>
      </Fragment>
    )
   }

   const date = new Date( numYear, numMonth - 1);

  return (
    <Fragment>
      { pageHeadData }
      <ResultsTitle date={ date } />
      <EventList items={ filteredEvents } />
    </Fragment>
  )
}

export default FilteredEventsPage
