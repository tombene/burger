// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var mysql = require("mysql");

var connection = mysql.createConnection(process.env.JAWSDB_URL);
	// {
// 	host: "ocvwlym0zv3tcn68.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
// 	user: "p3njyaoh0nkhg8lg",
// 	password: "b5v9nqv89cx52q7n",
// 	database: "k8onowbnll9zjiqy"
// });

connection.connect(function (err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;