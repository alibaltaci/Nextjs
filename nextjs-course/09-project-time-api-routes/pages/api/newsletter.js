import { MongoClient } from 'mongodb'

export default async function( req, res ){

    if( req.method === "POST" ){
        
        const userEmail = req.body.email;

        if( !userEmail || !userEmail.includes("@") ){
            res.status(422).json( { message: "Invalid email address!" } ); // durum kodu
            return;
        }

        const client = await MongoClient.connect('mongodb+srv://ali:gOyn1RsYIbNvcW0t@cluster0.o5yxamt.mongodb.net/newsletter?retryWrites=true&w=majority')
        // .then( client => {const db = client.db()})

        const db = client.db() // client.db('newsletter') ---> yukarıdaki url 'de belirttiğimiz için burada tekrar tanımlamaya gerek yok.

        await db.collection( 'email' ).insertOne( {email: userEmail, date: new Date().toDateString() } )

        client.close() // bağlantıyı kesmek için

        // console.log( userEmail );

        res.status(201).json({ message: "Signed Up!" })
    }
}