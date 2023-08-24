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

-  Next.js Advanced Features
    - Middlewares
        - intercepting the request
        - Autorization
    - Internationalized Routing
        - Culture Specific or locale specific request navigation
        - i18n
            - react-intl, reatc-i18next, lingui, etc.
            - next.config.js
                - i18n {
                    locals: ['','','']
                    defaultLocal:'hi-IN', 'de-DE', 'en-US'
                    domains:[

                    ],
                    localDetection:true

                }   
            - create a middleware
                - intercept the request
                    - read the defaultLocal
                    - then redirect
            - json file for translations
                - key:values pairs for translations
                    - Google Transaltors
            - Accept-Laguage package
                - Provide the culture specific HTTP request
                - Cookie
                    - Persist the Cultrure Specific Header value in browser
                    - For all next request the same culture UI will be rendered 
            - react-i18next
                - provided for intrenalization
                - The function 't()'
                    - for translation
                    - Load the Translation Locals JSON file to create the HTML Rendered response
                        - t('KEY') 
                            - KEY: the static text that needs to be translted based on the Local specific values 
                                - e.g. en-US, Hello in fr-FR, Bonjour
            - create a dynamic route that will be containing resources those will be applied with culture specific rendering     
                - make sure that the i18n folder is created with followig
                    - locales folder having subfolders for culture specific translations. These folder will contains 'json' files having strings with key:value pair where 
                        - key: the static string
                        - value: the culture specific local translated string             

    - Security or accessing the Next.js app based on User Credentials
        - Integration with Third-Party auth Providers
            - Twitter
            - GitHub
            - GMail
            - Facebook
        - NextAuth
            - next-auth package
                - Manage the pipeline for managing Secure Access of the Application    
            - Authentication Challanges
                - Selection of Ideneties
                - Identity Databases
                    - User, Roles, Auth, AccessRIghts policies, etc.
                - Integrating the Third-Party Identity Provider    
            - Easy Integration with Popular Auth Services
                - Google, Facebook, Auth0, Apple, GitHub
                    - Support for Built-In Email passwordless auth mechanism
            - Felxible
                - CHoose any of the provider or multiple or hybrid
                    - Any RDBS to Identity Info store
                    - Event with JWT Support 
                    - Securing Web Pages and API Routes 
            - Highly Secure based on Auth Providers
                - CSRF Cookies + HTTP POST
                    - Cross-Site-Request-Forgery  
                    - SYnc with the App and the Provider to provide an app access  
        - npm install next-auth
            - CReate an 'auth' fodler in 'api' folder
                - create a file in 'auth' folder names [...nextauth].ts
                - Add / Create, the NextAuth object and Register Providers in it
```` javascript
         const AppCredentials: Record<string, string> ={
               "UserName":"",
               "Password":"" 
         } ;
        export default NextAuth ({
             providers:[
                GitHubPrtovider({
                    clientId: '',
                    clientSecret:''
                }),
                AppleProvider({}),
                FecebookProvider({}),
                /* Passwordless EMail based signin */
                EmailProvider({
                    server: 'EMAIL-SERVER',
                    from:
                }),
                CredentialsProvider({
                    /* In TypeScript 
                        the 'Record<string, string>'
                    */
                    credentials:{
                        /* Schema for Credentials */
                        username:{label:'Username', type:'text', placeHoder:"Default-User-Name" },
                        password:{label:'Password', type:'text'}
                    },
                    /* The default Login Page */
                    async authorize(credentials){
                        // Write Logic for UserName PAssword Verification
                        /* If Success */
                        return user; // the information that can be used by the useSession()
                        /* Else */
                        return null;
                    }
                })
             ],
             /* Logout page */
             pages:{
                signOut: 'PATH-TO-LOGOUT-PAGE'
             }   
        });
````

        - next-auth/react
            - useSession() hook
                - Check and Determin if the Auth Secction is active
                    - Access to USer's Visible info
                        - user
                            - email
            - signIn("PROVIDER-NAME") method
                - PROVIDERT-NAME
                    - e.g. github, gmail, facebook, etc.
                - Manage the SignIn
                    - Based on Providers and the CLient-Id and Secert, it redirects to Login View
                    - Once the SignIn is done the 'useSesion()' is set with user info
                    - Generate Auth Cookie based on the Auth Provider
            - signOut() method
                - Clear all cookies
                - clear the useSession object
        - Generate the NEXTAUTH_SECRET
            - used by the deployment Env for the application
                -  App's integrity
            -  COMMAND to generate secret: Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/32     
        - The 'SessionProvider'
            - Manages the Next-Auth Lifecycle from Login to Logout
            - Maiantains the session state across all Views (aka components)           

- React-Query
    - The best solution for missing features for Data Fetching in React Apps
        - Fetching
        - Caching
        - Synchronization
- UseSwr
    - SWR : State-While-Revalidate
        - BAsed on HTTP Cache Invalidation
        - USe this for Data Fetching
        - Next.js apps
        - React Apps
    - Fast, lightweight
        - SSR, ISR, and SSG         


# app directory
    - Traditional data fetching is not Supported****
    - React Server-Side Components
        - They can execute asynchronously