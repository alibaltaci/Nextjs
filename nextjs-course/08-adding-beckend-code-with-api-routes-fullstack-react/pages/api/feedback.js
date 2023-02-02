import fs from "fs"; //node.js file system module
import path from "path";

function buildFeedbackPath(){
    return path.join( process.cwd(), "data", "feedback.json" )
}

function extractFeedback( filePath ){
    const fileData = fs.readFileSync( filePath ); 
    const data = JSON.parse( fileData ); 
    return data
}

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
        const filePath = buildFeedbackPath();

        // process.cwd() --> genel proje dizinine atıfta bulunur.
        // data --> data klasörü
        // feedback.json --> dosya 

        // const fileData = fs.readFileSync( filePath );  //dosyadaki dataları çeker.
        // const data = JSON.parse( fileData );  // data formatı 
        const data = extractFeedback( filePath );

        data.push( newFeedback );  // new feedback eklenir
        fs.writeFileSync( filePath, JSON.stringify( data ) );  // yeni data database 'e yazdırılır
        res.status( 201 ).json( { message: "Success!", feedback: newFeedback } ); //mesaj

    }else{
        const filePath = buildFeedbackPath();
        const data = extractFeedback( filePath );
        res.status(200).json( { feedback: data } );
    }   
}