import { NextRequest } from "next/server"
import { comments } from "./data"

// GET
// export const GET = () => {
//     return Response.json(comments)
// }

export const GET = ( request: NextRequest ) => {

    const searchParams = request.nextUrl.searchParams

    const query = searchParams.get("query")

    const filteredComments = query 
        ? comments.filter( c => c.text.includes(query))
        : comments

    return Response.json( filteredComments ) 
}
        
// http://localhost:3000/comments?query=third
// [
//   {
//     "id": 3,
//     "text": "This is the third comment"
//   }
// ]

// POST
export const POST = async(request: Request) => {

    const comment = await request.json()
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    }
    comments.push(newComment)

    return new Response( JSON.stringify(newComment), {
            headers: {
                "Content-Type": "application/json",
            },
            status: 201,
        }
    )
}