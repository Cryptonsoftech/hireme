/* 
 * Created By : Anindyasundar Bera.
 * Email : anindya@cryptonsoftech.com.
 */


angular.module('app')
        .controller('headerController', ['$scope', 'AuthService', '$state', '$rootScope', '$http',
            function ($scope, AuthService, $state, $rootScope, $http) {
                $scope.loginModal = document.getElementById('clientArea');
                $scope.user = {};
                $scope.showClientModal = function (disp) {
                    $scope.loginModal.style.display = disp;
//                    $scope.runLongProcess();
//                    toastr.info('Are you the 6 fingered man?');
                };
                $scope.runLongProcess = function () {
                    $http.get("http://bikiplus.com/biki_new/cron/DriverConfirm")
                            .then(function (response) {
                                $scope.myWelcome = response.data;
                            });
                };
                $scope.loggedUser = $rootScope.currentUser !== undefined &&
                        $rootScope.currentUser !== null && $rootScope.currentUser.email != null;
                $scope.clientLogout = function () {
                    AuthService.logout().then(function () {
                        $scope.loggedUser = false;
                        $state.go('home', null);
                    });
                };
//                $scope.clientLogin = function () {
//                    AuthService.login($scope.user.email, $scope.user.password)
//                            .then(function () {
//                                if ($scope.returnTo && $scope.returnTo.state) {
//                                    $state.go($scope.returnTo.state.name, $scope.returnTo.params);
//                                    $scope.returnTo.state = null;
//                                    $scope.returnTo.params = null;
//                                    return;
//                                }
//                                console.log($rootScope.currentUser);
//                                $scope.loggedUser = true;
//                                $scope.showClientModal('none');
//                                // or go to the default state after login
//                                $state.go('home', null);
//                            });
//
//                };
//                $scope.clientRegister = function () {
//                    $state.go('register', null);
//                };
            }]);