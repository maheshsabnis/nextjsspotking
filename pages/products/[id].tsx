import React from 'react'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ProductInfo } from '@/models/productinfo';
import ExecuteQuery from '@/dataaccess/db';
import ExecuteQueryNew from '@/dataaccess/da1';
 
 

 

const Product = ({product}:any) => {
  return (
    <div className='container'>
        <h4>Showing Product Detail</h4>
        {
            JSON.stringify(product)
        }
    </div>
  )
}

// the funciton thateill called during the build time
// make an API Callto get all the products
// and then return the paths for the single product
// based on ProductRowId
// the paths here are the SSG pages those will be
// loaded with data
// if the match path is not found the fallback will be shown
export async function getStaticPaths(){
    let products:Array<ProductInfo>  =new Array<ProductInfo>();
    try {

        // all the data
        const result = await ExecuteQueryNew("Select * from ProductInfo");
         
        products = result as Array<ProductInfo>;

        console.log(JSON.stringify(products));

        // get the path parameter that will be used by dynamic route
        // so the SSG page will be accessed   

        const paths = products.map((product:any)=>({
            params: {id: product.ProductRowId.toString()}
        }));
        

// return , the fallback:false the 404 
return {paths, fallback:true} 

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
//   return { paths, fallback: 'blocking' }

    }catch(e){
  console.log(e);
    }
    
    
}

// since for dynamic routing we need
// parameters based on which the data will be
// available at build time that help the getStaticPaths()
// to generate page aka Static-Site-Generation (SSG)
// access record from the API based on parameter value 
export async function getStaticProps({params}:any){
    let products:Array<ProductInfo>  =new Array<ProductInfo>();
    let product  =new ProductInfo(0,'','','','','',0);
    try {
        console.log(params);
        // read the Parameter value
        const result = await ExecuteQueryNew(`Select * from ProductInfo where ProductRowId=${params.id}`);
         
        products = result as Array<ProductInfo>;

        console.log(JSON.stringify(products[0]));
        product =  products[0];
        // pass the object to page using props
 return {
     props:{
         product
     },
     // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
 };
    }catch(e){
        console.log(e);
    }
   
}



export default Product;
