import { redirect } from "next/navigation"
import { comments } from "../data"

// type GETProps = {
//     _request: Request
//     params: {
//         id: string
//     }
// }

// GET
export const GET = async( 
    _request: Request, {params}:{params: {id: string}}
    // {_request, params}: GETProps
) => {

    if( parseInt(params.id) > comments.length ){
        redirect( "/comments" )
    }

    const comment = comments.find( comment => comment.id === parseInt(params.id))
    return Response.json(comment)
}

// PATCH
export const PATCH = async(request: Request, {params}:{params: {id: string}}) => {

    const body = await request.json()
    const { text } = body
    const index = comments.findIndex( comment => comment.id === parseInt(params.id) )
    comments[index].text = text

    return Response.json(comments[index])
}

// DELETE
export const DELETE = async(request: Request, {params}:{params: {id: string}}) => {

    const index = comments.findIndex( comment => comment.id === parseInt(params.id))
    const deletedComment = comments[index]
    comments.splice(index, 1)

    return Response.json( deletedComment )
}


