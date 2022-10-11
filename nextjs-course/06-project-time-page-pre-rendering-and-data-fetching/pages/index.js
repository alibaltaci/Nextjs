import EventList from "../components/events/EventList";

// from local
// import { getFeaturedEvents } from "../dumy-data"

export async function getStaticProps(){
  // const response = await fetch('https://s6-events-data-default-rtdb.firebaseio.com/events.json');
  
  // for filtered data 
  // filtered data --> https://firebase.google.com/docs/database/rest/retrieve-data
  const response = await fetch('https://s6-events-data-default-rtdb.firebaseio.com/events.json?orderBy="isFeatured"&equalTo=true');
  const data = await response.json();

  // object to array
  const events = [];

  for ( const key in data ){
    events.push({
      id: key,
      ...data[key]
    })
  }

  return{
    props:{
      featuredEvents: events
    }
  }  
}


export default function Home( {featuredEvents} ) {

  console.log( featuredEvents);

  // from local
  // const featuredEvents = getFeaturedEvents();

  return (
    <div >
      <EventList  items={ featuredEvents } />
    </div>
  )
}
