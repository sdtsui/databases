var mysql = require('mysql');
var http = require('http');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var authParams = {
      user: "root",
      password: "",
      database: "chat"
    };

var db = mysql.createConnection(authParams);

db.connect(function(err){if(err) throw err;});

module.exports.db = db;
