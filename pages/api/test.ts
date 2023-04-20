 
import { NextRequest,NextResponse } from 'next/server'
import sql from 'mssql';
export const config = {
  runtime: 'edge',
}

// export default async function handler(req: NextRequest) {  
//   const result = await fetch(`https://productapiserv.azurewebsites.net/api/ProductsAPI`);
        
//   const products = await result.json();


  

//   return new Response(
//     JSON.stringify({
//       name:products
//     }),
//     {
//       status: 200,
//       headers: {
//         'content-type': 'application/json',
//       },
//     }
//   )
// }
 