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

const db = require('./db/db');

// import promisify and sleep function
const { promisify } = require('util');
// sleep function to pause 
const sleep = promisify(setTimeout);

// middle wares
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}));
const options ={
    apikey:"9C96I9JFR1EUYWY51DQ9PUXQWYKHMYJP8P",
    contractaddress:"0x6Ec90334d89dBdc89E08A133271be3d104128Edb"
}



app.get('/',(req, res) => {
    // res.send("connected");
});

app.post('/api/insertHolders', (req, res) => {
    const sql ="INSERT INTO holders (address, balance) VALUES ('nksdk', '1000000000')";
    db.query(sql, (err, result) => {
        err ? res.send(err) : result ? res.send(result) : res.send('No result');
    });
});

app.get('/api/insertHolderInfo', (req, res) => {
    const address = req.body.address;
    const username = req.body.username;
    const balance = req.body.balance;
    const phone = req.body.phone;

    const sql ="INSERT INTO holders (address, balance, username, phone) VALUES (?,?,?,?)";
    db.query(sql,[address,balance,username,phone], (err, result) => {
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

app.get('/api/getWhales',(req, res) => {
    const sql = "SELECT * FROM holders WHERE balance > 1000000000000 ORDER BY balance DESC LIMIT 1000";
    db.query(sql,(err, result) => {
        err ? res.send(err) : result ? res.send(result) : res.send('No result');
    })
})

app.get('/api/getHolder',(req, res) => {
    const addy = req.body.address;
    const sql = "SELECT * FROM holders WHERE address=?";
    db.query(sql,[addy],(err, result) => {
        err ? res.send(err) : result ? res.send(result) : res.send('No result');
    })
})

app.get('/api/getHolderBalance/:address',(req,res) => {
    const addy = req.params.address;
    // const addy = "0xb552cf92e761c8c71f8de52ed10b0df6dcfa24ff";
    axios.get(`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${options.contractaddress}&address=${addy}&tag=latest&apikey=${options.apikey}`)
   .then((result) => {
    res.send(result.data.result);
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
    const json = response.data['wiki-cat'];
    console.log(json.usd);
    res.send(json);
    resolve(json);
  }
});
});

// wikicat total supply
app.get('/api/getTokenSupply',(req,res) => {
    axios.get(`https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=${options.contractaddress}&apikey=${options.apikey}`)
    .then((result) => {
        res.send(result.data.result);
    });
});

app.get('/api/getTokenCirculatingSupply', (req,res) => {
    var circulatingSupply
    axios.get(`https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=${options.contractaddress}}&apikey=${options.apikey}`)
    .then((result) => {
        res.send(result.data.result);
        console.log(result.data);
    })
});

app.get('/api/getDtgData', (req, res) => {

});

// starting server and listening port
app.listen(3001,()=>{
    console.log("server running, port 3001");
});
