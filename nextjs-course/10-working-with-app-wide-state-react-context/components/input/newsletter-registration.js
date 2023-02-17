import { useRef, useContext } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {

  const emailInputRef = useRef();

  const notificationCtx = useContext(NotificationContext)

  function registrationHandler(event) {
    event.preventDefault();

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API

    const enteredEmail = emailInputRef.current.value;

    // notificationCtx.showNotification({
    //   title: 'Signed Up',
    //   message: 'Registering for newsletter.',
    //   status: 'pending'
    // })


    fetch( "/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: { "Content-Type": "application/json" }
    } )
    .then( res => res.json() )
    .then( data => console.log(data))

    // fetch( "/api/newsletter", {
    //   method: "POST",
    //   body: JSON.stringify({ email: enteredEmail }),
    //   headers: { "Content-Type": "application/json" }
    // } )
    // .then( res =>{

    //   // res.json()
    //   console.log(res)
    //   if(res.ok){
    //     console.log(res)
    //     // return res.json()
    //   }
      
    //   return res.json().then( data => {
    //     throw new Error(  'Something went wrong1!' )
    //   })

    // })
    // .then( data =>{ 
    //   notificationCtx.showNotification({
    //     title: 'Success!',
    //     message: 'Successfully registered for newsletter!',
    //     status: 'seccess'
    //   }) 
    // })
    // .catch(error => {
    //   notificationCtx.showNotification({
    //     title: 'Error!',
    //     message:  'Something went wrong2!',
    //     status: 'error'
    //   })
    // })

  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={ emailInputRef }
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
