export default function hendler(req, res){

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

        console.log(newMessage)

        res
        .status(201) //success
        .json( {message: 'Successfully stored message.', message: newMessage} ) 
    }
}