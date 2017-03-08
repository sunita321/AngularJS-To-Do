var express  = require('express');

var mongoose = require('mongoose');
var router = express.Router();
var db = require('../db/dbconnection.js'); 
var Todo = require('../db/todos.model.js');



// home page 
router.get('/', function(request, response) 
{

	// get all the articles
	Todo.find({}, function(error, data) 
	{

		// check for error getting articles
		if (error) console.log("error getting articles", error);

		response.render('index', {title: "To Do List", articles: data});
	
	});

}); 

router.get('/todo', function(request, response) 
{
	

	// get all the articles
	Todo.find({}, function(error, data) 
	{

		// check for error getting articles
		if (error) 
		{
			console.log("error getting articles", error);
		}
		else
		{
			response.send(data);
			console.log(data);
		}

		
	
	});


});


router.post('/add', function(request, response)
{
	var newItem = new Todo(request.body);

	newItem.save(function(error, doc)
		{
		
			response.send(doc);
		});
});


router.post('/update', function(request, response)
{
	Todo.findOneAndUpdate(
		{_id: request.params.id},
		{$set: {todo: request.params.todo, 
			completeBy: request.params.completeBy, 
			completed: request.params.completed}
		},
			
			function(err, anotherDoc) 
			{
				if (error) console.log("post error", error);
				response.send(anotherDoc);
			});

});


module.exports = router;