import { books } from "../../../books";

export default function handler(req, res){

    const { id } = req.query;

    const book = books.find( (book) => (
        book.id.toString() === id
    ));

    if(book){
        res.status(200).json(book);

    }else{
        res.status(404).json({
            message: "Error: No such book"
        });
    }
};

// export default function handler(req, res) {
//     const { pid } = req.query
//     res.end(`Post: ${pid}`)
//   }