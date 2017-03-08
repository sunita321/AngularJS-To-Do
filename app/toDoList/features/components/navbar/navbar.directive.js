angular
	.module('toDoList.component.navbar')
	.directive('navbar', Navbar);

function Navbar() 
{
	return {
		restrict: 'E',
		scope: {
			navbarData: "="
		},
		templateUrl: '/toDoList/features/components/navbar/navbar.html',
		controller: NavbarCtrl,
		controllerAs: 'NavbarVM',
		bindToController: true
	}
}

function NavbarCtrl() {
	var vm = this;

	vm.navbarButtons = [
		'create', 'list', 'completed'
	]
}