var mongoose = require('mongoose');
var router = express.Router();
var db = require('../db/dbconnection.js'); 
var ToDo = require('../db/todos.model.js');




module.exports = function(app) 
{
	app.get('/todos', function(req, res)
	{
		ToDo.find({}, function(err, data){
			if (err) throw err;
			res.json(doc);
			})
		})
}