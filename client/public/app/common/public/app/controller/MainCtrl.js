(function() {
	'use strict';

	angular
	  .module('common')
	  .controller('MainController', MainController);

	MainController.$inject = ['$scope'];

	function MainController($scope) {
		//content
		$scope.msg="common code goe ";
	}
})();