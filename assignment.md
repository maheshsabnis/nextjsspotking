# Date: 10-April-2023
- Submission Date: 10-April-2023
1. Create a Next.js app as a fullstack app with the Routing User Experience as folows
    - Create 'ProductList' Page 
        - This will read data from server and show in Table
        - Above this table show a textbox that will provide a searh experience as follows
            - e.g. If the Text entered in Text box is "ProductName=Laptop", then it will show all laptops in table. E.g. "CategoryName=Electronics", then table will show all Products of the type electronics
    - Create a SSG for showing ProductDetails for a selected product from the 'ProductList' Page when 'Show Details' button is clicked
    - CReate 'AddProduct' page to accept Product Information      
        - After the Save is successful, navigate to the 'ProductList' page

  

    - Create 'EditProduct' Page
        - Navigate to this page base on the ProductRowId selected in the 'ProductList' table
        - SHow the Products details and edit them so that tyey can be saved
        - After the Edit is successful, navigate to the 'ProductList' page
    - Add and Edit pages must have 'Go Back' link to navigate back to the 'ProductList' Page  

2. (optional)
    - If any error occured during any operations (Read/Write), then show the fallback UI with error information                

