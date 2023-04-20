# Next.js
- Next 13.3
    - npx create-next-app@latest
        - pages folder
            - File-Based Routing
                - Server-Side Components*****
            - api folder
                - api creation
                - API ROute using 'handler'
                    - The Express Object Model
                    - Request and Response
- Next 13.x Experimental Project Structure
    - npx create-next-app@latest --experimental-app   
    - Experimental Features (Currently in Beta)
    - The 'src' folder
        - The 'app' folder that is for server-side contents
            - The 'api' folder
                - API Routes, 
                    - Each API is present in 'seperate folder' and the code is written in 'route.ts'
                        - Each route will be a seperate method
                            - GET, POST, PUT, and DELETE
                    - The Fetch API Request and Response object
                        - They havse async methods  
            - COmpoenent
                - layout.tsx is the component that renders all children
                - Next.js 13 Experimental
                    - Folder-File Based ROuting
                        - Each Folder MUST have its own page.tsx
                        - FOr a Common Layout for components only for that folder, tere must exist the 'layout.tsx'                 

# Programming with Next.js
- Practices and features of Next.js
- Routing
    - next/link
        - The 'Link'
            - href props to routing
- DataFetching


# Edge Runtime
    - Where as the API ROutes are based on or uses Node.js Runtime
    - Edge Runtime based on Standard WEB API Principals
        - STandard HTTP Request Processing
            - any format of Data Communication
            - streamed based Communciation over HTTP
        - Supports
            - FormData
            - File
            - Blob
            - ArrayBuffer
        - Network API
            - fetch
            - Request
            - Response
            - Headers
        - ENcoders
            - base64 bit encoders
                - atob btoa
        - Stream API
            - Read/Write Stream
                - ReadableStream and WritableStream 
        - next/server
            - NextRequest
                - body
                    - stream
                - json
                    - json data in body      
            - NextResponse     
            - Cache-Control
            - QueryParameters             
    - Not all node-modules are supported by edge runtime
        - stream
            - mssmql
    - Serverless          
    - USe of 'Middlewares'
        - USed for Modifying the request and accordingly manage the response
        - Mandatory logic that we want to exxecute for each incomming HTTP Request to APIs
```` javascript
       export const config = {
         runtime: 'edge'
       } 

````


# app directory
    - Traditional data fetching is not Supported****
    - React Server-Side Components
        - They can execute asynchronously