angular.module('templateApp')
    .controller('HomeCtrl', [
        '$scope',
        function($scope) {
            console.log('Loaded.');
            $scope.message = 'Hello World Tests';
        }
    ]);