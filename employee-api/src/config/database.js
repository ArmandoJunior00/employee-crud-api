/**
 * arquivo: config/database.js
 * descrição: arquivo resposavel pelas 'connectionStrings' (Cosmos DB E PostgreSQL)
 * data: 28/10/2022
 */

const { pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> conexão com a base de dados
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('error', (err, client) => {
    console.err('Unexpected error on idle client', err)
    process.exit(-1)
})

pool.on('connect', () => {
    console.log('Base de dados conectada com sucessso')
})

module.exports = {
    query: (text, params) => pool.query(text, params)
};
