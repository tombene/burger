//Local Dependencies
var connection = require("./connection.js");

var orm = {
	selectAll: function (tableInput, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [tableInput], function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function (tableInput, column1, insertValue1, column2, insertValue2, cb) {
		var queryString = "INSERT INTO ?? (??, ??) VALUES (? , ?)";
		connection.query(queryString, [tableInput, column1, column2, insertValue1, insertValue2], function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function (tableInput, whatToUpdate, updateValue, whereColumn, whereInput, cb) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, [tableInput, whatToUpdate, updateValue, whereColumn, whereInput],
			function (err, result) {
				if (err) throw err;
				cb(result);
			});
	}
}

module.exports = orm;