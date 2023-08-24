import { ProductInfo } from '@/models/productinfo';
import sql from 'mssql';

export default async function ExecuteQueryNew(query:string){
    try {
         let pool = await sql.connect({
            user:'sa',
            password: 'MyPass@word',
            server: '127.0.0.1',
            database: 'eShoppingCodi',
            port:1433,
            options:{
                // instanceName:'127.0.0.1',
                trustedConnection:true,
                trustServerCertificate:true
            }
        });
        let data = await pool.request().query(query);

        let products = new Array<ProductInfo>();
        products = data.recordset;
       
        return  products;
    }catch(error){
        console.log(`Faied to Execute the query ${error}`);
    }
}

