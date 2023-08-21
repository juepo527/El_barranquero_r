const mysql = require('mysql');
const cors = require('cors');
const express = require('express');
const app = express()

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'el_barranquero'
}
)

app.get("/menu",(req, res)=>{
    db.query('SELECT * from menu',
    (err, result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})