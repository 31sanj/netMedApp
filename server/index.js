const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const mysql=require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'netmedb',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/insert', (req, res) => {
    const userName = req.body.userName;    
    const sqlInsert =
        "INSERT INTO users (userName) VALUE (?)";
    db.query(sqlInsert, userName , (err, result) => {
        console.log(result);
    })
})

app.post('/https://5f1a8228610bde0016fd2a74.mockapi.io/getTestList', (req, res) => {
    const testName = req.body.itemName;
    console.log(testName)
    const sqlInsert =
        "INSERT INTO test (testName) VALUES (?)";
    db.query(sqlInsert, testList, (err, result) => {
        console.log(err);
    })
})

app.get('/api/get', (req, res) => {
    const sqlSelect =
        "SELECT * FROM users";
    db.query(sqlSelect, (err, result) => {
        console.log(result);
        res.send(result);
    })
})

//listening on port 3001
app.listen(3001, () => {
    console.log("running on port 3001");
});

