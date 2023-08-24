import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router';

const SelectedProduct = () => {
   
    const [value,setValue] = useState('');
  
   // create an useRouter type object to read the data
   const router = useRouter(); 
    
   // read the route query parameter
   useEffect(()=>{
        // alwaya check for not undefined
        if(router.query.pValue!==undefined)
            setValue(router.query.pValue?.toString());
   },[]) 

  return (
    <div>
      <h1>The Selected Prodfuct</h1>
      Received Value :
       <strong>
          {value}
       </strong>
    </div>
  )
}

export default SelectedProduct
