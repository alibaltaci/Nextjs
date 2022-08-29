import { books } from "../../../books";

export default function handler (req, res){
    res.status(200).json(books)
}