const mysql = require("mysql");

// Create Connection
// Create Connection
const db = mysql.createConnection({
    host : "us-cdbr-iron-east-01.cleardb.net",
    user : "bb5860e1800559",
    password : "5f1436e6",
    database : "heroku_2e5ea325b630181"
    
});
//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("Mysql Connected...")
});

module.exports = db;

