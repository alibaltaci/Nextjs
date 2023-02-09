import { MongoClient } from 'mongodb'

async function connectDatabase(){
    
    const client = await MongoClient.connect('mongodb+srv://ali:gOyn1RsYIbNvcW0t@cluster0.o5yxamt.mongodb.net/events?retryWrites=true&w=majority')

    return client
}

async function insertDocument( client, document ){

    const db = client.db()

    await db.collection( 'newsletter' ).insertOne( document )

}

export default async function( req, res ){

    if( req.method === "POST" ){
        
        const userEmail = req.body.email;

        if( !userEmail || !userEmail.includes("@") ){
            res.status(422).json( { message: "Invalid email address!" } ); // durum kodu
            return;
        }

        // const client = await MongoClient.connect('mongodb+srv://ali:gOyn1RsYIbNvcW0t@cluster0.o5yxamt.mongodb.net/events?retryWrites=true&w=majority')

        // const db = client.db() // client.db('newsletter') ---> yukarıdaki url 'de belirttiğimiz için burada tekrar tanımlamaya gerek yok.

        // await db.collection( 'newsletter' ).insertOne( {email: userEmail, date: new Date().toDateString() } )

        // client.close() // bağlantıyı kesmek için

        // for errors 

        let client;

        try{
            client = await connectDatabase()
        }catch(error){
            const e = await res.status(500)  //sunucu tarafında bir şeylerin ters gittiğini gösterir.
            .json({message: 'connecting to the database failed'})
            return; 
        }

        try{
            await insertDocument( client, {email: userEmail, date: new Date().toDateString() } )
            client.close()
        }catch(error){
            res.status(500).json({message: 'Inserting data failed'})  //sunucu tarafında bir şeylerin ters gittiğini gösterir.
            return; 
        }

        res.status(201).json({ message: "Signed Up!" })
    }
}