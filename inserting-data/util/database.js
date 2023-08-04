const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-completed',
    password: 'Ashish8298'
});

module.exports = pool.promise();