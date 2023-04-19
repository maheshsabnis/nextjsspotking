import sql from 'mssql';

// definijng conneciton configuration

const config ={
    user:'sa',
    password: 'MyPass@word',
    server: '127.0.0.1',
    database: 'eShoppingCodi',
    port:1433,
    options:{
        instancename:'127.0.0.1',
        trustedconnection:true,
        trustedServerCertificate:true
    }
};

export default async function ExecuteQuery(query:string){
    try {
         let pool = await sql.connect({
            user:'sa',
            password: 'MyPass@word',
            server: '127.0.0.1',
            database: 'eShoppingCodi',
            port:1433,
            options:{
                // instanceName:'127.0.0.1',
                trustedConnection:true,
                trustServerCertificate:true
            }
        });
        let data = await pool.request().query(query);
        return  data.recordsets;
    }catch(error){
        console.log(`Faied to Execute the query ${error}`);
    }
}

