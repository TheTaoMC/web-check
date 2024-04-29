// db/db.config.js
const sql = require('mssql');

const config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    //port: process.env.PORT,
    database: process.env.DATABASE,
    connectionTimeout: 100000, // Set connection timeout to 30 seconds
    options: {
        trustServerCertificate: true,
        encrypt: true,
        port: 17601
    },
};

const pool = new sql.ConnectionPool(config);

module.exports = {
    pool,
};