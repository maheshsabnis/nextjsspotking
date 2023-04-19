/* Import the CSS this will be loaded and apllied durting the Compilation */
import '@/styles/globals.css'
/* This represents the ReactNode aka the 'one' object model that load
all component inside the 'App' component based on the 
Folder-Based-Routing
Component: The Component to be loaded
pageProps: Additional metainfo for the component e.g. Session object
*/
import type { AppProps } from 'next/app'
/* Higher-Order-Component (HoC), a pattern in React.js
  It accepts a component as input parameter and return Component
*/
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
