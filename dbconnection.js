const mysql = require("mysql");

// Create Connection
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "dig001flam40.",
    database : "loantrust_db"
});

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("Mysql Connected...")
});

module.exports = db;

