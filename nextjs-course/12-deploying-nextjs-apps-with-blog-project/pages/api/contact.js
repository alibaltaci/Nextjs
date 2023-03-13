import {MongoClient} from 'mongodb'

export default async function hendler(req, res){

    if( req.method === 'POST' ){

        const { email, name, message } = req.body

        if( !email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '' ){
            
            res.status(422).json( {message: 'Invalid Input.'} )
            return;
        }

        const newMessage ={
            email,
            name,
            message
        }

        let client;

        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.5yepgxo.mongodb.net/${process.env.mongodb_database}`

        console.log(connectionString)
        try{
            client = await MongoClient.connect(connectionString)
            // .then() // async await yerine bu şekilde de kullanılabilirdi.
        }catch(error){
            res.status(500) //sunucu hataları için durum kodu
            .json({ message: message.error, message: 'Could not connect to database' })
            return; // hata varsa işlemi sonlardırmak için
        }

        const db = client.db()

        try {
            const result = await db.collection('messages') //database tarafında oluşturulacak bölüm başlığı
            .insertOne(newMessage)    
            newMessage.id = result.insertedId // otomatik verilen insertedId yi newMessage a id olarak ekledik
        } catch (error) {
            client.close()  //bağlantıyı kes
            res.status(500).json({message: message.error, message: 'Storing message failed!'})
            return;
        }

        client.close()
        
        console.log(newMessage)
        res
        .status(201) //success
        .json( {message: 'Successfully stored message.', message: newMessage} ) 
    }
}