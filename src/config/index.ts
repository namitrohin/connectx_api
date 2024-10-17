import pg, { Client, Pool } from 'pg';
// configDotenv.config({ path: `.env.${process.env.NODE_ENV}` })
// export = new Client({
//     user: process.env.USERNAME,
//     password: process.env.PASSWORD,
//     host: process.env.HOST,
//     port: 5432,
//     database: process.env.DATABASE,
// })

export = new Pool({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: 5432,
    database: process.env.DATABASE,
    idleTimeoutMillis: 30000,
    max: 20,
    connectionTimeoutMillis: 2000,
})