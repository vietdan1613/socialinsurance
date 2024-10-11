require('dotenv').config();
const sql = require('mssql');

// Configuration object for your SQL Server connection
const config = {
  user: 'sa',
  password: '12345',
  server: 'DESKTOP-I0IKPN8\\SQLEXPRESS',
  database: 'QMS',
  options: {
    encrypt: false, // Use encryption (required for Azure)
    trustServerCertificate: true, // Change to true for local dev/test
    cryptoCredentialsDetails: {
      minVersion: 'TLSv1'
    }
  },
};

// Reusable function to execute a query
async function executeQuery(query) {
  let pool;
  try {
    console.log(config)
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
