//NPM Dependencies
var express = require("express");


//Local Dependencies
var burger = require("../models/burger.js");


module.exports = function (app) {
	app.get("/", function (req, res) {

		burger.getBurgers(function (data) {
			console.log(data);
			res.render("index", { burgers: data });
		});
	});

	app.post("/api/add", function (req, res) {
		console.log(req.body);
		burger.createBurger(req.body.name, function (data) {
			console.log("you created a burger ", data.insertId);
			res.json({ id: data.insertId });
		});
	});

	app.put("/api/update/:id", function (req, res) {
		burger.consumeBurger(req.params.id, function (data) {
			if (data.changedRows == 0) { return res.status(404).end(); }
			else {
				console.log("update successful! ", data);
				res.status(200).end();
			}
		});
	});

	// app.delete("/api/delete/:id", function (req, res){
	// 	burger.
	// });
}
