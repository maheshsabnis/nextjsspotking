import React from 'react'
import Navigator from './navigator'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { ProductInfo } from '@/models/productinfo';
import ExecuteQuery from '@/dataaccess/db';

type dataProps = {
    products: ProductInfo[]
};


const HomePage = (props: dataProps) => {
  return (
    <div>
       <h2>The Home Page</h2>
        <Navigator></Navigator>
        <hr/>
        <div className='container'>
            {
                JSON.stringify(props.products)
            }
        </div>
    </div>
  )
}

// context:  parms, used in case the page uses dynamic route e.g [page-id].tsx
// HTTP Request and Response object (Node.js + Express)
// QueryString

// Return Value: 
// props: JSON object with K:V pair represening
// data that will be made aailable to the page
// notFound, redirect, etc


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
export default HomePage
