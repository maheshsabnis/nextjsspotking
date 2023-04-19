import React from 'react'
import Link from 'next/link';
const Navigator = () => {
  return (
    <div className='container'>
       <table className='table table-bordered table-striped'>
         <tbody>
             <tr>
                <td>
                   <Link href='/'>Index</Link> 
                </td>
                <td>
                   <Link href='/home'>Home</Link> 
                </td>
                <td>
                   <Link href='/about'>About</Link> 
                </td>
                <td>
                   <Link href='/contact'>Contact</Link> 
                </td>
             </tr>
         </tbody>
       </table>
    </div>
  )
}

export default Navigator;
