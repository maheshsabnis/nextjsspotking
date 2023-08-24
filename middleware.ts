import { stat } from 'fs';
import { NextRequest, NextResponse } from 'next/server'

// export const config = {
//   runtime:'edge'
// };

export const config = {
  runtime:'experimental-edge'
};


export function middleware(req:NextRequest) {
  console.log(`Middleware is Invoked`);
  // authorization: `[Schema] [CREDENTIALS]`
  // e.g.
  // authorization: `Basic [UserName]:[Password]`
  // authorization: `Bearer [TOKEN-VALUE]`
  const basicAuth = req.headers.get('authorization')
  console.log(`Basic Auth ${basicAuth}`);
  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]; // [UserName]:[Password]
    console.log(`Auth = ${JSON.stringify(auth)}`)
    // extract [UserName] and [Password] by splitting on ':'
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')
    // validating
    // Call to verify username and password from data store
    if (user === 'mahesh' && pwd === '123') {
      // if correct move to the resource
      return NextResponse.next();
    }
  }
  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}


// export default function middleware(request:NextRequest) {
//   const state = request.cookies.get('state');
//   console.log(`coookie value is = ${state?.value}`);
//   if(state !== undefined) {
//      if(state.value === "maharashtra"){
//        const url =  request.nextUrl.clone();
//        // http://server/state/mah
//        url.pathname = "/mah";
//        console.log(`url path is = ${url}`);
//        return NextResponse.rewrite(url);
//      }
//   } else {
//     // fallback 
//   }
// }