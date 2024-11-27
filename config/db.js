const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'archie',
    password: '358645',
    database: 'telemedicine',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();
