var mysql = require("mysql");
//creating the connection to my sql
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Amady$97",
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
