const Sequelize = require('sequelize');
require('dotenv').config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
console.log("dbconfigure")
console.log(DB_HOST, DB_NAME, DB_PASSWORD, DB_USER);
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  dialect: 'postgres',
  host: "localhost",
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

})

module.exports = sequelize;
