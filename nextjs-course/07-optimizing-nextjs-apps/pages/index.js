import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";

export async function getStaticProps(){

  const featuredEvents = await getFeaturedEvents();

  return{
    props:{
      featuredEvents: featuredEvents
    },
    revalidate: 1800
  }  
}


export default function Home( {featuredEvents} ) {

  console.log( featuredEvents);

  return (
    <div >
      <EventList  items={ featuredEvents } />
    </div>
  )
}
