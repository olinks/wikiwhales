// importing express
const express = require('express');

// importing axios
const axios = require('axios');

// include body-parser
const bodyparser = require('body-parser');

// include cors
const cors = require('cors');

// initializing express to app 
const app = express();

// importing mysql
const mysql = require('mysql');

// connecting to Database
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"wikicat"
});

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}));

const apikey = "9C96I9JFR1EUYWY51DQ9PUXQWYKHMYJP8P";
const contractaddress = "0x6Ec90334d89dBdc89E08A133271be3d104128Edb";
var address = "0xb552cf92e761c8c71f8de52ed10b0df6dcfa24ff";
var info;

axios.get(`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contractaddress}&address=${address}&tag=latest&apikey=${apikey}`)
.then(res => {
    info =res.data;
    console.log(res.data.result);
})

app.get('/',(req, res) => {
    res.send(info);
});

app.get('/api/insertHolders', (req, res) => {
    const sql ="INSERT INTO holders (address, balance) VALUES ('nksdk', '1000000000')";
    db.query(sql, (err, result) => {
        err ? res.send(err) : result ? res.send(result) : res.send('No result');
    });
});

app.get('/api/updateHolderBalance/:b', (req, res) => {
    const address = req.body.addy;
    const newbal = req.params.b;
    const sql ="UPDATE holders SET balance=? WHERE address=?";
    db.query(sql,[newbal,address], (err, result) => {
        err ? res.send(err) : result ? res.send(result) : res.send('No result');
    });
});

app.get('/getHolders',(req, res) => {
    const sql = "SELECT * FROM holders WHERE balance > 0 ORDER BY balance DESC LIMIT 1000";
    db.query(sql,(err, result) => {
        err ? res.send(err) : result ? res.send(result) : res.send('No result');
        result.map(val =>{
            console.log(val.address);
            console.log(val.balance);
        });
    })
})

// starting server and listening port
app.listen(3001,()=>{
    console.log("server running, port 3001");
});
