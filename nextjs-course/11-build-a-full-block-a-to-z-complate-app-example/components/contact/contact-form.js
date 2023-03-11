import {useState} from 'react'
import classes from './contact-form.module.css'

export default function ContactForm(){

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')


    const sendMessageHanler = (event) => {

        event.preventDefault()

        // optional: add client-side validation

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            }),
            headers: {
                'Content-Type': 'application/json',
            } 
        })


    }

    return(
        <section className={classes.contact} >
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHanler} >
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' required value={enteredEmail} onChange={event => setEnteredEmail(event.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='name'>Your Name</label>
                        <input type='text' id='name' required value={enteredName} onChange={event => setEnteredName(event.target.value)} />
                    </div>
                </div>
                <div className={classes.controls}>
                    <label htmlFor='message'>Your Message</label>
                    <textarea id='message' rows='5' required value={enteredMessage} onChange={event => setEnteredMessage(event.target.value)} />
                </div>

                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>

        </section>
    )
}