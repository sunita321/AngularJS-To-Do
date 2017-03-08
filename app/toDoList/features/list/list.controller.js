angular
	.module('toDoList.list')
	.controller('ListCtrl', ListCtrl);

function ListCtrl($scope, toDoApi) 
{
	
        // create a message to display in our view
        //$scope.items = ['Everyone come and see how good I look!', 'bla', 'jeff'];
        $scope.message = 'Everyone come and see how good I look!';

    $scope.items = [];
	
	toDoApi.getTodo($scope.items);
}

