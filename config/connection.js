//set up sql connection
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    // Your username
    user: "root",
    // Your password
    password: "rootpassword",
    database: "burgers_db"
  });
}

  //make connection
  connection.connect();
  
  // (function(err) {
  //   if (err) {
  //     console.error("error connecting: " + err.stack);
  //     return;
  //   }
  //   console.log("connected as id " + connection.threadId);
  // });
  
  // Export connection to ORM 
  module.exports = connection;