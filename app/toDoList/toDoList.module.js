// Here we declare the main module (app).
angular
	.module('toDoList', [
		 // Global Dependencies
		'ui.router',

		 // Features
		'toDoList.list',
		//'toDoList.create',
		//'toDoList.completed',
		'toDoList.component.navbar',
		//'toDoList.component.item',
		'toDoList.component.toDoApi'
		
		])
	.config(appConfig);

function appConfig($urlRouterProvider) 
{
	// If the URL does not exist as a route, redirect to /
	$urlRouterProvider.otherwise('/');
}


