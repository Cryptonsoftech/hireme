// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
        .module('app', [
            'ui.router',
            'lbServices',
            'angular-loading-bar'
        ])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$qProvider'
                    , function ($stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {
                        $locationProvider.html5Mode(true);
                        $qProvider.errorOnUnhandledRejections(false);
                        $stateProvider
                                .state('sign-up', {
                                    url: '/sign-up',
                                    views: {
                                        'header': header,
                                        'content': {
                                            templateUrl: 'views/sign-up-form.html',
                                            controller: 'SignUpController'
                                        },
                                        'footer': footer
                                    }
                                    // authenticate: true
                                })
                                .state('home', {
                                    url: '/home',
                                    views: {
                                        'header': header,
                                        'content': {
                                            templateUrl: 'views/home.html',
                                            controller: 'HomeController'
                                        },
                                        'footer': footer
                                    }
                                })
                                .state('login', {
                                    url: '/login',
                                    views: {
                                        'header': header,
                                        'content': {
                                            templateUrl: 'views/login.html',
                                            controller: 'AuthLoginController'
                                        },
                                        'footer': footer
                                    }
                                })
                                .state('register', {
                                    url: '/register',
                                    views: {
                                        'header': header,
                                        'content': {
                                            templateUrl: 'views/register.html',
                                            controller: 'registerController'
                                        },
                                        'footer': footer
                                    }
                                })
                                .state('register-2', {
                                    url: '/register-2',
                                    views: {
                                        'header': header,
                                        'content': {
                                            templateUrl: 'views/register2.html',
                                            controller: 'registerController'
                                        },
                                        'footer': footer
                                    }
                                })
                                .state('register-3', {
                                    url: '/register-3',
                                    views: {
                                        'header': header,
                                        'content': {
                                            templateUrl: 'views/register3.html',
                                            controller: 'registerController'
                                        },
                                        'footer': footer
                                    }
                                })
                                .state('register-4', {
                                    url: '/register-4',
                                    views: {
                                        'header': header,
                                        'content': {
                                            templateUrl: 'views/register4.html',
                                            controller: 'registerController'
                                        },
                                        'footer': footer
                                    }
                                })
                                .state('about', {
                                    url: '/about',
                                    views: {
                                        'header': header,
                                        'content': {
                                            templateUrl: 'views/about.html',
                                            controller: 'aboutController'
                                        },
                                        'footer': footer
                                    }
                                })
                                .state('terms', {
                                    url: '/terms',
                                    views: {
                                        'header': header,
                                        'content': {
                                            templateUrl: 'views/terms.html',
                                            controller: 'termsController'
                                        },
                                        'footer': footer
                                    }
                                })
                                .state('cookie', {
                                    url: '/cookie',
                                    views: {
                                        'header': header,
                                        'content': {
                                            templateUrl: 'views/cookie.html',
                                            controller: 'cookieController'
                                        },
                                        'footer': footer
                                    }
                                })
                                .state('advertise', {
                                    url: '/advertise',
                                    views: {
                                        'header': header,
                                        'content': {
                                            templateUrl: 'views/promocontrol.html',
                                            controller: 'advertiseController'
                                        },
                                        'footer': footer
                                    }
                                })
                                .state('contact', {
                                    url: '/contact',
                                    views: {
                                        'header': header,
                                        'content': {
                                            templateUrl: 'views/contact.html',
                                            controller: 'contactController'
                                        },
                                        'footer': footer
                                    }
                                })
                                ;
                        $urlRouterProvider.otherwise('home');
                    }])
        .run(['$rootScope', '$state', 'LoopBackAuth', 'AuthService', function ($rootScope, $state, LoopBackAuth, AuthService) {
                $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
                    // redirect to login page if not logged in
                    if (toState.authenticate && !LoopBackAuth.accessTokenId) {
                        event.preventDefault(); //prevent current page from loading

                        // Maintain returnTo state in $rootScope that is used
                        // by authService.login to redirect to after successful login.
                        // http://www.jonahnisenson.com/angular-js-ui-router-redirect-after-login-to-requested-url/
                        $rootScope.returnTo = {
                            state: toState,
                            params: toParams
                        };
                        $state.go('forbidden');
                    }
                });
                // Get data from localstorage after pagerefresh
                // and load user data into rootscope.
                if (LoopBackAuth.accessTokenId && !$rootScope.currentUser) {
                    AuthService.refresh(LoopBackAuth.accessTokenId);
                }
            }]);
var header = {
    templateUrl: 'views/header.html',
    controller: 'headerController'
};
var footer = {
    templateUrl: 'views/footer.html',
    controller: 'footerController'
};
