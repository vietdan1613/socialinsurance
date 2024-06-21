require('dotenv').config();
const sql = require('mssql');

// Configuration object for your SQL Server connection
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // Use encryption (required for Azure)
    trustServerCertificate: true, // Change to true for local dev/test
  },
};

// Reusable function to execute a query
async function executeQuery(query) {
  let pool;
  try {
    pool = await sql.connect(config);
    console.log('Connected to SQL Server');
    let result = await pool.request().query(query);
    return result;
  } catch (err) {
    console.error('SQL error', err);
    throw err;
  } finally {
    if (pool) {
      pool.close();
    }
  }
}

module.exports = { executeQuery };
