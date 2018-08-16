const mysql = require("mysql");

// Create Connection
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "loan-trust_db"
});

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("Mysql Connected...")
});

module.exports = db;

