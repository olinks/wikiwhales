require("dotenv").config();
// calling mysql
const mysql = require("mysql");

// const db = mysql.createPool({
//     host:"wikicat.cluster-cddevtlkqpte.us-east-1.rds.amazonaws.com",
//     user:"",
//     password:"",
//     database:""
// });
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = db;
