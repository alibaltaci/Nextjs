import { MongoClient } from "mongodb"

export async function connectDatabase(){
    
    const client = await MongoClient.connect('mongodb+srv://ali:gOyn1RsYIbNvcW0t@cluster0.o5yxamt.mongodb.net/events?retryWrites=true&w=majority')

    return client
}

export async function insertDocument( client, collection, document ){

    const db = client.db()

    const result = await db.collection( collection ).insertOne( document )

    return result;

}

export async function getAllDocuments(client, collection, sort, 
    filter={}){  // {} tüm datayı alamak için eventId. {eventId: eventId} database içindeki eventId 'si dinamik olarak gelen eventId 'mize eşit olanlar.

    const db = client.db()

    const documents = await db.collection( collection ) //'comments'
        .find( filter )  
        .sort( sort )
        .toArray() 

    return documents;
}