import { NextRequest, NextResponse } from "next/server";

export const config = {
    runtime: 'edge'
};

// all data
// export default async function handler(request:NextRequest){
    
//     const resp = await fetch('https://productapiserv.azurewebsites.net/api/ProductsAPI');
//     const dataSet = await resp.json();

//     console.log(`DataSet = ${JSON.stringify(dataSet)}`);
//     return NextResponse.json({
//         received: dataSet
//     });
// }

// a single record
export default async function handler(request:NextRequest){
    const {searchParams}  = new URL(request.url);
    const id= searchParams.get('id'); 
    const resp = await fetch(`https://productapiserv.azurewebsites.net/api/ProductsAPI/${id}`);
    const dataSet = await resp.json();

    console.log(`DataSet = ${JSON.stringify(dataSet)}`);
    return NextResponse.json({
        received: dataSet
    });
}