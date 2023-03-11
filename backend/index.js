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
<<<<<<< HEAD
const db = require('./db/db');
=======
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"wikicat"
});
>>>>>>> parent of b136ac7 (connected to cloud DB)

// import promisify and sleep function
const { promisify } = require('util');
// sleep function to pause 
const sleep = promisify(setTimeout);

// middle wares
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}));

const apikey = "9C96I9JFR1EUYWY51DQ9PUXQWYKHMYJP8P";
const contractaddress = "0x6Ec90334d89dBdc89E08A133271be3d104128Edb";
var addy = "0xb552cf92e761c8c71f8de52ed10b0df6dcfa24ff";



app.get('/',(req, res) => {
    // res.send("connected");
});

app.post('/api/insertHolders', (req, res) => {
    const sql ="INSERT INTO holders (address, balance) VALUES ('nksdk', '1000000000')";
    db.query(sql, (err, result) => {
        err ? res.send(err) : result ? res.send(result) : res.send('No result');
    });
});

app.get('/api/insertHolderInfo/', (req, res) => {
    const address = req.body.address;
    const username = req.body.username;
    const phone = req.body.phone;

    const sql ="INSERT INTO holders (address, balance, username, phone) VALUES (?,?,?,?)";
    db.query(sql, (err, result) => {
        err ? res.send(err) : result ? res.send(result) : res.send('No result');
    });
});

app.get('/api/updateHolderBalance/:balance&:address', (req, res) => {
    const address = req.params.address;
    const newbal = req.params.balance;
    const sql ="UPDATE holders SET balance=? WHERE address=?";
    db.query(sql,[newbal,address], (err, result) => {
        err ? res.send(err) : result ? res.send(result) : res.send('No result');
    });
});

app.get('/api/getHolders',(req, res) => {
    const sql = "SELECT * FROM holders WHERE balance > 0 ORDER BY balance DESC LIMIT 1000";
    db.query(sql,(err, result) => {
        err ? res.send(err) : result ? res.send(result) : res.send('No result');
        result.map(val =>{
            console.log(val.address);
            console.log(val.balance);
        });
    })
})

app.get('/api/getAllHolders',(req, res) => {
    const sql = "SELECT * FROM holders WHERE balance > 0 ORDER BY balance DESC LIMIT 10";
    // const sql = "SELECT * FROM holders  WHERE balance > 0";
    db.query(sql,(err, result) => {
        err ? res.send(err) : result ? res.send(result) : res.send('No result');
        data = result
    })
})

app.get('/api/getWikicatData', (req, res) => {

});

// wikicat total supply
app.get('/api/getTokenSupply',(req,res) => {
    axios.get(`https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=${contractaddress}&apikey=${apikey}`)
    .then((result) => {
        res.send(result.data.result);
    });
});

app.get('/api/getTokenCirculatingSupply', (req,res) => {
    var circulatingSupply
    axios.get(`https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=${contractaddress}}&apikey=${apikey}`)
    .then((result) => {
        res.send(result.data.result);
        console.log(result.data);
    })
});

app.get('/api/getDtgData', (req, res) => {

});

/* Example in Node.js */
let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=wiki-cat&vs_currencies=USD&include_24hr_vol=true&include_24hr_change=true');
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});

    // axios.get(
    //     'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=WKC&CMC_PRO_API_KEY=846183f5-61b1-4b17-92a8-8fce70fd4420'
    //     )

    // axios.get(
    //     'https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=WKC&CMC_PRO_API_KEY=846183f5-61b1-4b17-92a8-8fce70fd4420'
    //     )
    //   .then((response) => {
    //     // console.log((response.data['wiki-cat'].usd)*(10**18));
    //     console.log(response.data.data);
    //   });

// starting server and listening port
app.listen(3001,()=>{
    console.log("server running, port 3001");
});
// 7.934463926146836e3