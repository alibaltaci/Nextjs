import {useEffect, useState} from 'react'
import classes from './contact-form.module.css'
import Notification from '../../ui/notification'

const sendContactData = async (contactDetails) => {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json',
        } 
    })

    const data = await response.json()

    if(!response.ok){
        throw new Error(data.message || 'Something went wrong!')
    }
}

export default function ContactForm(){

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')

    const [requestStatus, setRequestStatus] = useState()  // 'pending', 'success', 'error'
    const [requestError, setRequestError] = useState()

    useEffect( () => {
        if(requestStatus === 'success' || requestStatus === 'error'){
            const timer = setTimeout( () => {
                setRequestStatus(null)
                setRequestError(null)
            }, 3000)

            // return () => clearTimeout(timer)  // tekrar tekrar göndermek için buttona basılırsa dahi 3 sn de mesajın kaldırılmasını sağlıyor.
        }
    }, [requestStatus]) // bu sayede diğerleri değiştiğinde çalışmayaca (email, name vs.)

    const sendMessageHanler = async (event) => {

        event.preventDefault()

        // optional: add client-side validation

        // !!!! Bu kısım context bölümünde yukarıya taşındı

        // const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         email: enteredEmail,
        //         name: enteredName,
        //         message: enteredMessage
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     } 
        // })

        // const data = await response.json()

        // if(!response.ok){
        //     throw new Error(data.message || 'Something went wrong!')
        // }

        // !!! context - notification kısmı için aşağıdaki kısın eklenmiştir.
        setRequestStatus('pending')  // veriler iletilirken

        try {
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            })
            setRequestStatus('success') // veriler başarılı bir şekilde gönderildikten sonra 
            setEnteredEmail('')
            setEnteredName('')
            setEnteredMessage('')
        } catch (error) {
            setRequestError(error.message) // hata mesajını aşağıdaki if blogunda gösterebilmek için
            setRequestStatus('error') // verileri gönderir iken hata ile karşılaşılırsa
        }
    }

    let notification;

    if(requestStatus === 'pending'){
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!'
        }
    }
    
    if(requestStatus === 'success'){
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message send successfully!'
        }
    }
    
    if(requestStatus === 'error'){
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError  // error mesajı catch blogundan gelir 
        }
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

            {notification &&( <Notification 
                status={notification.status}
                message={notification.message}
                title={notification.title} 
            />)}

        </section>
    )
}