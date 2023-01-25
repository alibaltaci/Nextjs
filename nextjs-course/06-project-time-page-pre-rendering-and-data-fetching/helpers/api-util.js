export async function getAllEvents() {
    const res = await fetch("https://s6-events-data-default-rtdb.firebaseio.com/events.json");
    const data = await res.json();

    const events = [];

    for( const key of data){
        events.push({
            id: key,
            ...data[key]
        })
    }

    return events;
}

export async function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }

getAllEvents();

  
