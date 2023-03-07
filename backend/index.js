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
var addy = "0xb552cf92e761c8c71f8de52ed10b0df6dcfa24ff";



app.get('/',(req, res) => {
    res.send(fetchAddress());
});

app.post('/api/insertHolders', (req, res) => {
    const sql ="INSERT INTO holders (address, balance) VALUES ('nksdk', '1000000000')";
    db.query(sql, (err, result) => {
        err ? res.send(err) : result ? res.send(result) : res.send('No result');
    });
});

app.get('/api/insertHolderInfo/:address&:username', (req, res) => {
    const address = req.params.address;
    const username = req.params.username;
    // const phone = req.params.phone;
    // const data = {address, username, phone};

    res.send(username);
    // const sql ="UPDATE holders SET username = ";
    // db.query(sql, (err, result) => {
    //     err ? res.send(err) : result ? res.send(result) : res.send('No result');
    // });
});

app.get('/api/updateHolderBalance/:balance&:address', (req, res) => {
    const address = req.body.address;
    const newbal = req.params.balance;
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

app.get('/api/getAllHolders',(req, res) => {
    const sql = "SELECT * FROM holders WHERE balance > 0 ORDER BY balance DESC LIMIT 3";
    // const sql = "SELECT * FROM holders  WHERE balance > 0";
    db.query(sql,(err, result) => {
        err ? res.send(err) : result ? res.send(result) : res.send('No result');
        data = result
    })
})

app.get('/api/getWikicatData', (req, res) => {

})

app.get('/api/getDtgData', (req, res) => {

})

// axios.get("http://localhost:3001/getAllHolders")
// .then(res =>{
//     const address = res.data;
//     console.log(address);
//     var i = 1;
//     address.forEach( a => {

//             const getBal = async () => {
//                  const me = axios.get(`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contractaddress}&address=${a.address}&tag=latest&apikey=${apikey}`);
//                 const response = await me.then(res => {
//                     console.log(res.data.result);
//                 });
//             } 

//         console.log(i);
//         console.log(a.address);
//         getBal();

//          i++;
//     })
// }
// )

// const sleep = (milliseconds) => {  
//       return new Promise(resolve => setTimeout(resolve, milliseconds)); 
// }

axios.get("http://localhost:3001/api/getAllHolders").then((res) => {
  const dbResult = res.data;

  setInterval(() => {
    var i = 1;
    //   console.log(i,dbResult);

      i++;
  }, 20000);

    dbResult.map(m => {
        // console.log(m.address);
    });

//   console.log("dbresult =>",dbResult);
  const mydb = dbResult.map( async (data) => {
    const { address } = data;
    // await sleep(1500);
    setInterval(async () => {
        const res = await 
        axios.post(
          `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contractaddress}&address=${address}&tag=latest&apikey=${apikey}`
        ).then((res) => {
            console.log("result", res);
        }
        );


        /*
        const balance = res.data.result;
        const intodb = {address, balance};
    
        try{
            // update Db
            const query = "UPDATE holders SET balance=? WHERE address=?"
            db.query(query,[intodb.balance, intodb.address],(err, result) => {
                err ? console.log(err) : result ? console.log(intodb,result) : console.log("void");
            })
        }catch (e){
            console.log("olayinka eeee eee eee eee eee eee eee eee eee eee eee eee eee ee error", e);
        }
        */


        // console.log("some text",intodb);
        // return intodb;
    }, 20000);
    })

})
// starting server and listening port
app.listen(3001,()=>{
    console.log("server running, port 3001");
});
// 7.934463926146836e3