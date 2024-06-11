import { cookies, headers } from "next/headers"
import { type NextRequest } from "next/server"

export const GET = async( request:NextRequest) => {

    const requestHeaders = new Headers( request.headers )

    const headerList = headers()

    cookies().set("resultPerPage", "20")
    const theme = request.cookies.get("theme")

    console.log( requestHeaders.get("Authorization") )
    console.log( headerList.get("Authorization") )
    console.log( theme ) 
    console.log( cookies().get("resultPerPage") ) 
    
    return new Response("<h1>Profile API data</h1>", {
        headers:{
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}