const express = require('express');
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud",
})

app.get('/', (req, res)=>{
    const query = "SELECT * FROM students";
    
    db.query(query, (err, data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})


app.listen(8080, ()=>{
    console.log('listing');
})