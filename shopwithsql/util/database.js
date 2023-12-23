const mysql = require('mysql2')


const pool = mysql.createPool({
  database: 'eshop',
  user: 'root',
  password: 'sniper2000',
})

module.exports = pool.promise();
