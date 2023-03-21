// calling mysql
const mysql = require('mysql');

const db = mysql.createPool({
    host:"wikicat.cluster-cddevtlkqpte.us-east-1.rds.amazonaws.com",
    user:"admin",
    password:"password",
    database:"wikicat"
});

module.exports = db;