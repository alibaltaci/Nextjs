import Head from "next/head"

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

  return (
    <div >
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventList  items={ featuredEvents } />
    </div>
  )
}
