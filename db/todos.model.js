// Require Mongoose
var mongoose = require('mongoose');



mongoose.Promise = Promise;

// Create a Schema Class
var Schema = mongoose.Schema;



var TodoItems = new Schema ({
	todo: String,
	completeBy: Date,
	completed: {type:Boolean, default:false}
});

var Todo = mongoose.model('Todo', TodoItems);

module.exports = Todo;