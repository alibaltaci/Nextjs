// import { MongoClient } from "mongodb";
import { connectDatabase, getAllDocuments, insertDocument } from '../../../helpers/db-util'

export default async function handler( req, res ){

    const eventId = req.query.eventId;

    // const client = await MongoClient.connect('mongodb+srv://ali:gOyn1RsYIbNvcW0t@cluster0.o5yxamt.mongodb.net/events?retryWrites=true&w=majority')

    let client;

    try{
        client = await connectDatabase()
    }catch( error ){
        res.status(500).json( {message: 'Connecting to the database failed!'} )
        return;
    }

    if( req.method === "POST" ){
        const { email, name, text } = req.body;

        if( !email.includes("@") || !name || name.trim() === "" || !text || text.trim() === "" ){
            res.status(422).json( { message: "Invalid Input!" } );
            client.close() // giriş hatalıysa işlem burada kesilecek.
            return;
        }

        const newComment = {
            // id: new Date().toISOString(), // bu olayı mongodb 'ye havale ediyotuz.
            email,
            name,
            text,
            eventId
        }

        // const db = client.db()

        // const result = await db.collection('comments').insertOne( newComment )

        let result;

        try{
            result = await insertDocument( client, 'comments', newComment )

            newComment._id = result.insertedId; // mongodb 'nin bize verdiği id. Verilen şekle uygun olsun diye _id şeklinde ekledik.
    
            res.status(201).json({ message: "Added Comment.", comment: newComment  })

        }catch(error){
            res.status(500).json( {message: 'Inserting commnet failed!'} )
            // return; 
        }

        
    }

    if( req.method === "GET" ){
 
        // const db = client.db()

        // const documents = await db.collection('comments')
        //     .find()  
        //     .sort( { _id:-1 } )   //azalan sıralamak için. İlk yorum sona gelecek şekilde.
        //     .toArray()  // array 'e çevirmek için

        try{
            const documents = await getAllDocuments( client, 'comments', {_id: -1}, {eventId: eventId} )
            res.status(200).json({ comments: documents })
        }catch(error){
            res.status(500).jsson( {message: 'Getting comments failed!'} )
            // return;  // res i yukarıda döndürdüğümüz için burada işlemi kesmeye gerek yok.
        }

    }

    client.close()
}