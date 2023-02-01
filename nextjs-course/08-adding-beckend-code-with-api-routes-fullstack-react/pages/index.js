import { useRef } from "react";
 
export default function Home() {

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHendler(e){

    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    
    const reqBody = { 
      email: enteredEmail,   
      text: enteredFeedback
    };

    fetch( "/api/feedback", {
      method: "POST",
      body: JSON.stringify( reqBody ),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then( response => response.json() )
    .then( data => console.log( data ) )

  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={ submitFormHendler } >
        <div>
          <label htmlFor="email" >Your Email Address</label><br />
          <input type="email" id="email" ref={ emailInputRef } />
        </div>
        <br />
        <div>
          <label htmlFor="feedback">Your Feedback</label><br />
          <textarea id="feedback" rows="5" ref={ feedbackInputRef } />
        </div>
        <br /> 
        <button>Send Feedback</button>
      </form>
    </div>
  )
}
