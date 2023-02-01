import fs from "fs"; //node.js file system module
import path from "path";

export default function hendler( req, res ){

    if( req.method === "POST" ){

        const email = req.body.email;
        const feedbackText = req.body.text;

        const newFeedback = {
            id: new Date().toISOString(),
            email: email,
            text: feedbackText
        }

        // store that in a database or in a file
        const filePath = path.join( process.cwd(), "data", "feedback.json" )

        // process.cwd() --> genel proje dizinine atıfta bulunur.
        // data --> data klasörü
        // feedback.json --> dosya 

        const fileData = fs.readFileSync( filePath );  //dosyadaki dataları çeker.
        const data = JSON.parse( fileData );  // data formatı 
        data.push( newFeedback );  // new feedback eklenir
        fs.writeFileSync( filePath, JSON.stringify( data ) );  // yeni data database 'e yazdırılır
        res.status( 201 ).json( { message: "Success!", feedback: newFeedback } ); //mesaj

    }else{
        res.status(200).json( { message: "This Works!" } );
    }   
}