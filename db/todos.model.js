// Require Mongoose
var mongoose = require('mongoose');
// require the connection
var db = require("../db/dbconnection");


mongoose.Promise = Promise;

// Create a Schema Class
var Schema = mongoose.Schema;



var TodoItems = new Schema ({
	todo: {
		type: String
	},

	completeBy: {
		type: Date
	},

	completed: {
		type: Boolean
	}
})

var Todo = mongoose.model('Todo', TodoItems);

module.exports = Todo;