// 1. import next/server to access NextRequest and NextReponse object

import ExecuteQuery from "@/dataaccess/db";
import { NextRequest, NextResponse } from "next/server";

// 2. define the edge runtime  configuration for curent API Route

export const config = {
    runtime:'edge'
};

// 3. Lest create handler to process request
// export default async function handler(request:NextRequest){
//     const method = request.method; 
//     console.log(`Method = ${method}`);
//     let respData:string = '';
//     switch(method) {
//         case 'GET':
//             respData = 'The Get Request for Mr. Mahesh';
//             break;
//         case 'POST':
//              const headers = request.headers;
//              const body = await request.json();  
//              respData = `Headers ${JSON.stringify(headers)} and Body ${JSON.stringify(body)}`     
//     }


//     // return NextResponse.json({
//     //     received: respData
//     // });

//     return new Response(
//         respData
//     ,{
//         status:200,
//         headers: {
//             'Content-Type':'application/json',
//             'cache-control':'public, s-maxage=1200,stale-while-revalidate=600'
//         }
//     });
// }


export default async function handler(request:NextRequest){
    const dataSet = await ExecuteQuery("Select * from ProductInfo");
    console.log(`DataSet = ${JSON.stringify(dataSet)}`);
    return NextResponse.json({
        received: dataSet
    });
}