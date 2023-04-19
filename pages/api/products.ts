import { NextApiRequest, NextApiResponse } from "next";
import ExecuteQuery from "@/dataaccess/db";
import { ProductInfo } from "@/models/productinfo";


export default  function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    // USe Swich-case ot if-else statement to detect the
    // request method for GET/POST/PUT/DELETE operations

    const method = req.method;
    console.log(`Methos = ${method}`);
    switch(method){
        case 'GET':
            const data =  ExecuteQuery("Select * from ProductInfo");

            data.then((records)=>{
                res.status(200).json({ products: JSON.stringify(records) })
            }).catch((error)=>{
                res.status(500).send({message: `Error Occured ${error}`})
            });
          break;  
        case 'POST':
            // 1. Read Body
            const body = req.body;
            const product:ProductInfo = new ProductInfo(
                0,body.ProductId,
                body.ProductName,
                body.CategoryName,
                body.Manufacturer,
                body.Description,
                parseInt(body.BasePrice)
            );

            const postdata =  ExecuteQuery(`Insert into ProductInfo Values('${product.ProductId}', '${product.ProductName}', '${product.CategoryName}', '${product.Manufacturer}', '${product.Description}', ${product.BasePrice})`);

            postdata.then((record)=>{
                res.status(200).send({ message: 'New Record is created', product: JSON.stringify(record) })
            }).catch((error)=>{
                res.status(500).send({message: `Error Occured ${error}`})
            });
            break; 
        case 'PUT':
            // MUST be Implemented but You
            break;
        case 'DELETE':
             // MUST be Implemented but You
            break;        
    }

   
   
  }