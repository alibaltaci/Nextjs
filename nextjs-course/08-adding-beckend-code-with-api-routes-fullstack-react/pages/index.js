import { useRef } from "react";
 
export default function Home() {

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHendler(e){

    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    
    console.log( enteredEmail, enteredFeedback );

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
