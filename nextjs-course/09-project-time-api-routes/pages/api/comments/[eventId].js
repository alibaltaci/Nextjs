export default function handler( req, res ){

    const eventId = req.query.eventId;

    if( req.method === "POST" ){
        const { email, name, text } = req.body;

        if( !email.includes("@") || !name || name.trim() === "" || !text || text.trim() === "" ){
            res.status(422).json( { message: "Invalid Input!" } );
            return;
        }

        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text
        }
        console.log( newComment );
        res.status(201).json({ message: "Added Comment.", comment: newComment  })
        
    }

    if( req.method === "GET" ){
        const dummyList = [
            { id:"c1", name:"Ali", text: "A first comment." },
            { id:"c2", name:"Hasan", text: "A second comment." },
            { id:"c3", name:"Tuncay", text: "A third comment." },
        ]

        res.status(200).json({ comments: dummyList })
    }
}