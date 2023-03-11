// calling mysql
const mysql = require('mysql');

// Localhost Db connect
/*const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"wikicat"
});
*/
const db = mysql.createPool({
    host:"sql.freedb.tech",
    user:"freedb_wikicat",
    password:"j&#J42ta754K83e",
    database:"freedb_wikicat"
});

module.exports = db;