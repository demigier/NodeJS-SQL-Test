import { config } from 'dotenv'
config();

export default {
    dbServer: process.env.DB_SERVER || '',
    dbInstance: process.env.DB_INSTANCE || '',
    dbUser: process.env.DB_USER || '',
    dbPass: process.env.DB_PASS || '',
    dbPort: process.env.DB_PORT || 1433,
    database: process.env.DB_TARJETAS_DATABASE || '',
    port: process.env.PORT || 3000
}