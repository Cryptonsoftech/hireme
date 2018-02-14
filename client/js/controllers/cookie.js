/* 
 * Created By : Anindyasundar Bera.
 * Email : anindya@cryptonsoftech.com.
 */


angular.module('app')
        .controller('cookieController', ['$scope', '$state', '$rootScope', '$http',
            function ($scope, $state, $rootScope, $http) {
                $scope.loginModal = document.getElementById('clientArea');
                $scope.user = {};
            }]);