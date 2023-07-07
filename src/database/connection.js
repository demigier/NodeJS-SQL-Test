import sql from 'mssql';
import env from '../config.js';

const dbSettings = {
    user: env.dbUser,
    password: env.dbPass,
    server: env.dbServer,
    database: env.database,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

export async function getConnection() {
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }
    catch(error){
        console.error(error);
    }
    
}

export { sql };