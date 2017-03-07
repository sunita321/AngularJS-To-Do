angular
	.module('toDoList.list')
	.controller('ListCtrl', ListCtrl);

function ListCtrl(table, $http) 
{
	var vm = this;

	vm.items = [];

	  $http({
		method: 'GET',
		url: '/api/table'
	}).then(function(response){
		console.log(response);
		//for each todo push into the todoData aray
		response.data.forEach(function(element){
			vm.items.push(element);
		});
	});
}