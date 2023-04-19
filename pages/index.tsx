/* The Image Component: SUpport lazy loading for images*/
import Image from 'next/image'
import { Inter } from 'next/font/google'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigator from './navigator';

const inter = Inter({ subsets: ['latin'] })
/* The FIsrt Component */
export default function Home() {
  return (
     <div className='container'>
        <h2>The Netx.js App</h2>
        <Navigator></Navigator>
     </div> 
  );
}
