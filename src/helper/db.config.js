const mysql = require('mysql');
const config  = require('config');


const dbConn = mysql.createConnection(config.get("db.mysql"));
dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});


module.exports = dbConn;
