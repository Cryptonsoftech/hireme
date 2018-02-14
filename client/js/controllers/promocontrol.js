/* 
 * Created By : Anindyasundar Bera.
 * Email : anindya@cryptonsoftech.com.
 */
//This is advertise controller. Add blocker was blocking it

angular.module('app')
        .controller('advertiseController', ['$scope', '$state', '$rootScope', '$http',
            function ($scope, $state, $rootScope, $http) {
                $scope.loginModal = document.getElementById('clientArea');
                $scope.user = {};
            }]);