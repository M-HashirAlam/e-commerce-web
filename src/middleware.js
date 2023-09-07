import { NextResponse } from "next/server";

export function middleware(request){
    // console.log('mm')

    if(request.nextUrl.pathname =="/study"){
       
        return NextResponse.redirect(new URL("/love",request.url))
      }


}

// export const config={
//     // matcher:["/about/:path*", "/studentlist/:path*"]
// }