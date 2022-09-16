import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dumy-data"

export default function Home() {

  const featuredEvents = getFeaturedEvents();

  return (
    <div >
      <h1>The Home Page</h1>
      <EventList  items={ featuredEvents } />
    </div>
  )
}
