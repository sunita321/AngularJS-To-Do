angular
    .module('toDoList.create')
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl($scope, table) 
{
    var vm = this;

    vm.items = 
            {
                toDoItem: '',
                dueDate: '',
            };

    resetView()

    function resetView() {
        vm.items = 
            {
                toDoItem: '',
                dueDate: '',
            }
    }

    vm.addItem = function(toDoItem, dueDate) 
    {
        vm.items.toDoItem = toDoItem;
        vm.items.dueDate = dueDate;
        table.addItem(vm.items);
        console.log(vm.items)
        resetView()
    }
}