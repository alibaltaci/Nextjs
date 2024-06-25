import { NextRequest, NextResponse } from "next/server"

// #first approach

// export const middleware = ( request: NextRequest) => {
//     return NextResponse.redirect( new URL( "/", request.url ))
// }

// export const config = {
//     matcher: "/profile"
// }

// #second approach

export const middleware = ( request: NextRequest) => {
    const url = request.nextUrl.clone()
    if( url.pathname === "/profile" ){
        url.pathname = "/hello"
        return NextResponse.redirect( url )
        // return NextResponse.redirect( new URL( "/hello", request.url ) )
        // return NextResponse.rewrite( new URL( "/hello", request.url ) )
    }
}

// #cookies
// export const middleware = ( request: NextRequest) => {

//     const response = NextResponse.next()

//     const themePreference = request.cookies.get("theme")
    
//     if( !themePreference ){
//         response.cookies.set("theme", "dark")
//     }

//     response.headers.set("custom-header", "custom-value")
    
//     return response
// }

