angular
    .module('toDoList.create')
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl($scope, toDoApi) 
{
    var vm = this;

    vm.items = 
            {
                toDoItem: '',
                
            };

    resetView();

    function resetView() {
        vm.items = 
            {
                toDoItem: '',
                
            }
    }

    vm.addItem = function(toDoItem) 
    {
        vm.items.todo = toDoItem;
        
        toDoApi.addTodo(vm.items);
        console.log(vm.items);
        resetView();
    }
}