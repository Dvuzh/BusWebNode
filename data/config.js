const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'localhost',
    user: 'test',
    password: 'nokia12nokia',
    database: 'buses',
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;