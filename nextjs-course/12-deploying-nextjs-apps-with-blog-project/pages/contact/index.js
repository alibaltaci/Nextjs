import { Fragment } from "react";
import Head from 'next/head'
import ContactForm from "../../components/contact/contact-form";

export default function ContactPage(){
    
    return(
        <Fragment>
            <Head>
                <title>Contact Me</title>
                <meta 
                    name='description' 
                    content='Send me your messages!' // bu sayfa için çok önemli olmayabilir ama yine de ekliyoruz
                />
            </Head>
            <ContactForm />
        </Fragment>
    )
}