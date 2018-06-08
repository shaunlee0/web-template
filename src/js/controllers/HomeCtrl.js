angular.module('templateApp')
    .controller('HomeCtrl', [
        '$scope',
        function($scope) {
            var vm = this;

            console.log('Loaded.');
            $scope.message = 'Hello World Tests';

            vm.message = 'Hello World Test';
        }
    ]);