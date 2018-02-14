// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
        .module('app')
        .factory('AuthService', ['User', '$q', '$rootScope', '$state',
            function (User, $q, $rootScope, $state) {
                function login(email, password) {
                    try {
                        return User
                                .login({email: email, password: password}, function (response) {
                                    console.log(response);
                                    console.log('fsdf');
//                                if (err) {
//                                    toastr.error('Are you the 6 fingered man?');
//                                    console.log(err);
//                                    return;
//                                }
                                })
                                .$promise
                                .then(function (response) {
                                    console.log(response);
                                    $rootScope.currentUser = {
                                        id: response.user.id,
                                        tokenId: response.id,
                                        email: email
                                    };
                                });
                    } catch (Err) {
                        console.log(Err);
                    }
                }

                function logout() {
                    return User
                            .logout()
                            .$promise
                            .then(function () {
                                $rootScope.currentUser = null;
                            });
                }

                function register(email, password) {
                    return User
                            .create({
                                email: email,
                                password: password
                            })
                            .$promise;
                }

                function refresh(accessTokenId) {
                    return User
                            .getCurrent(function (userResource) {
                                $rootScope.currentUser = {
                                    id: userResource.id,
                                    tokenId: accessTokenId,
                                    email: userResource.email
                                };
                            });
                }
                return {
                    login: login,
                    logout: logout,
                    register: register,
                    refresh: refresh
                };
            }]);
