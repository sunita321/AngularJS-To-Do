angular
	.module('toDoList.component.toDoApi')
	.service('toDoApi', ToDoApiService);

function ToDoApiService($http) 
{
	return {
		getTodo: function (todos) 
		{			
			$http.get('/todo')
				.then(function (response) 
				{
					response.data.forEach(function (item) 
					{
						todos.push(item);
						console.log("found item: " + item.todo);
					});

				});
		},
		addTodo: function (newTodo) 
		{
			$http.post('/add',
				newTodo
			).then(function (response) 
			{
				console.log("new Todo added");
			}).catch(function (err) 
			{
				console.log(err);
			});
		},
		updateTodo: function (todo) 
		{
			$http.post('/update',
				todo
			).then(function (res) 
			{
				console.log(res);
			}, function (err) 
			{
				console.log(err);
			});
		}
	};
}