import Head from "next/head"
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";

function AllEventsPage( props ) {
  
  const router = useRouter();

  const { events } = props;

  function findEventsHandler( year, month ){
    const fullPath = `/events/${ year }/${ month }`;
    router.push( fullPath );
  }

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>

      <EventsSearch onSearch={ findEventsHandler } />      
      <EventList items={ events } />
    </div>
  )
}

export async function getStaticProps(){
  
  const events = await getAllEvents();

  return{
    
    props:{
      events: events
    },

    revalidate: 60
  }
} 

export default AllEventsPage
