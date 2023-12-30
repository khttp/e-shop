
//const mysql = require('mysql2')
//
//
//const pool = mysql.createPool({
//  database: 'eshop',
//  user: 'root',
//  password: 'sniper2000',
//})
//
//module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'eshop',
  'root',
  'sniper2000',
  {
    dialect: 'mysql',
    host: 'localhost'
  }
);

module.exports = sequelize;
