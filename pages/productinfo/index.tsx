import React from 'react'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ProductInfo } from '@/models/productinfo';
import ExecuteQuery from '@/dataaccess/db';
import Link from 'next/link';
import { useRouter } from 'next/router';

type dataProps = {
    products: ProductInfo[]
};

const ProductList = (props:dataProps) => {

    const router = useRouter();

   const btnClick=(id:number)=>{
        // organize the routing with parameter
        router.push({
            pathname:'/productinfo/selproduct', // the target to navigate to 
            query:{
                pValue:id // query parameter
            }
        });
   }; 

  return (
    <div className='container'>
          {
            props.products[0].map((prd:ProductInfo,idx:number)=>(
                <ul key={idx}>
                   <li>
                     {/* <Link href={`/productinfo/selproduct/${prd.ProductRowId}`}>{prd.ProductRowId}</Link>  */}
                      <button onClick={()=>btnClick(prd.ProductRowId)} value={prd.ProductRowId}>{prd.ProductRowId}</button>
                   </li>     
                </ul>
            ))
          }  
    </div>
  )
}

export async function getServerSideProps(){
    // call to DB
    const recordSet = await ExecuteQuery("Select * from ProductInfo"); 
    console.log(`Server Side Rendered Data ${JSON.stringify(recordSet)}`);
    return {
        props:{
            products: recordSet
        }
    }
}

export default ProductList;
