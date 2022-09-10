import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {

  const navigate = useNavigate(); 

  function addMeetupHandler( meetupData ){

    fetch(
        "https://react-meetup-464df-default-rtdb.firebaseio.com/meetups.json",
        {
          method: "POST",
          body: JSON.stringify(meetupData),
          headers:{
            "Content-Type": "aplication/json"
          }
        }
      ).then( () => {
        navigate("/");
        // document.location.href = '/';  //You don't need to import "react-router-dom"
      } );

  }

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={ addMeetupHandler }  />
    </section>
  )
}

export default NewMeetupPage;
