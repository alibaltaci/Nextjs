import { MongoClient } from "mongodb";

export default async function handler( req, res ){

    const eventId = req.query.eventId;

    const client = await MongoClient.connect('mongodb+srv://ali:gOyn1RsYIbNvcW0t@cluster0.o5yxamt.mongodb.net/events?retryWrites=true&w=majority')

    if( req.method === "POST" ){
        const { email, name, text } = req.body;

        if( !email.includes("@") || !name || name.trim() === "" || !text || text.trim() === "" ){
            res.status(422).json( { message: "Invalid Input!" } );
            return;
        }

        const newComment = {
            // id: new Date().toISOString(), // bu olayı mongodb 'ye havale ediyotuz.
            email,
            name,
            text,
            eventId
        }

        const db = client.db()

        const result = await db.collection('comments').insertOne( newComment )

        console.log( result );

        newComment.id = result.insertedId; // mongodb 'nin bize verdiği id.

        res.status(201).json({ message: "Added Comment.", comment: newComment  })
        
    }

    if( req.method === "GET" ){
        // const dummyList = [
        //     { id:"c1", name:"Ali", text: "A first comment." },
        //     { id:"c2", name:"Hasan", text: "A second comment." },
        //     { id:"c3", name:"Tuncay", text: "A third comment." },
        // ]

        const db = client.db()

        const documents = await db.collection('comments')
            .find()  
            .sort( { _id:-1 } )   //azalan sıralamak için. İlk yorum sona gelecek şekilde.
            .toArray()  // array 'e çevirmek için

        res.status(200).json({ comments: documents })
    }

    client.close()
}