// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular.module('app').controller('HomeController', ['$scope', 'AuthService', '$state', 'User',
    function ($scope, AuthService, $state, User) {
        $scope.loginModal = document.getElementById('clientArea');
        $scope.user = {};
        $scope.showClientModal = function () {
            $scope.loginModal.style.display = "block";
        };
        $scope.hideCurrentModal = function () {
            $scope.loginModal.style.display = "none";
        };
        $scope.clientLogin = function () {
//            console.log($scope.user);
//            User.login($scope.user, null, function (err, auth){
//                console.log(err);
//                console.log(auth);
//            });
//
            AuthService.login($scope.user.email, $scope.user.password)
                    .then(function (response) {
                        // return to saved returnTo state before redirection to login
                        if ($scope.returnTo && $scope.returnTo.state) {
                            $state.go(
                                    $scope.returnTo.state.name,
                                    $scope.returnTo.params
                                    );
                            // maintain the inherited rootscope variable returnTo
                            // but make the returnTo state of it null,
                            // so it can be used again after a new login.
                            $scope.returnTo.state = null;
                            $scope.returnTo.params = null;
                            return;
                        }
                        console.log(response);
                        // or go to the default state after login
                        $state.go('add-review');
                    });

        };
    }]);
