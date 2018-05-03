//Local Dependencies 
var orm = require("../config/orm.js");

module.exports = {
	getBurgers: function(cb){
		orm.selectAll("burgers",function(data){
			cb(data);
		});
	},
	// getConsumedBurgers: function(cb){
	// 	orm.selectAll("burgers","burger_name","devoured",1,function(err,data){
	// 		cb(err,data);
	// 	});
	// },
	createBurger: function(name,cb){
		orm.insertOne("burgers","burger_name",name,"devoured",0,function(data){
			cb(data);
		});
	},
	consumeBurger: function(id,cb){
		orm.updateOne("burgers","devoured",1,"id",id,function(data){
			cb(data);
		});
	}
}

// //Test Lines
// orm.selectAll("burgers","*");

// orm.insertOne("burgers","burger_name","crazy spicey hot","devoured","0");

// orm.updateOne("burgers","burger_name","so blazing hot chicken","id","6");