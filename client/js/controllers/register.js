/* 
 * Created By : Anindyasundar Bera.
 * Email : anindya@cryptonsoftech.com.
 */


angular.module('app')
        .controller('registerController', ['$scope', '$state', '$rootScope', '$http',
            function ($scope, $state, $rootScope, $http) {
                $scope.loginModal = document.getElementById('clientArea');
                $scope.user = {};
                $scope.saveThisPage = function (val) {
                    switch (val) {
                        case 0:
                            console.log(val);
                            $state.go("register-2", null);
                            break;
                        case 1:
                            console.log(val);
                            $state.go("register-3", null);
                            break;
                        case 2:
                            console.log(val);
                            $state.go("register-4", null);
                            break;
                        case 3:
                            console.log(val);
                            $state.go("register-4", null);
                            break;
                    }
                };
                $scope.backToPage = function (val) {
                    switch (val) {
                        case 0:
                            console.log(val);
                            $state.go("register", null);
                            break;
                        case 1:
                            console.log(val);
                            $state.go("register", null);
                            break;
                        case 2:
                            console.log(val);
                            $state.go("register-2", null);
                            break;
                        case 3:
                            console.log(val);
                            $state.go("register-3", null);
                            break;
                    }
                };



//For changing color using the bellow codes
                $scope.visit = {};
                $scope.visit.step1 = false;
                $scope.visit.step2 = false;
                $scope.visit.step3 = false;
                $scope.visit.step4 = false;
                $scope.visit.step5 = false;
                $scope.visit.step1_counter = 1;
                $scope.visit.step2_counter = 0;
                $scope.visit.step3_counter = 0;
                $scope.visit.step4_counter = 0;
                $scope.visit.step5_counter = 0;

                $scope.stepVistited = function (step) {
                    switch (step) {
                        case 1:
                            $scope.stepVistitColor();
                            $scope.visit.step1_counter++;
                            break;
                        case 2:
                            $scope.stepVistitColor();
                            $scope.visit.step2_counter++;
                            break;
                        case 3:
                            $scope.stepVistitColor();
                            $scope.visit.step3_counter++;
                            break;
                        case 4:
                            $scope.stepVistitColor();
                            $scope.visit.step4_counter++;
                            break;
                        case 5:
                            $scope.stepVistitColor();
                            $scope.visit.step5_counter++;
                            break;

                    }
                }
                $scope.stepVistitColor = function () {
                    if ($scope.visit.step1_counter > 0) {
                        $scope.visit.step1 = true;
                    }
                    if ($scope.visit.step2_counter > 0) {
                        $scope.visit.step2 = true;
                    }
                    if ($scope.visit.step3_counter > 0) {
                        $scope.visit.step3 = true;
                    }
                    if ($scope.visit.step4_counter > 0) {
                        $scope.visit.step4 = true;
                    }
                    if ($scope.visit.step5_counter > 0) {
                        $scope.visit.step5 = true;
                    }
                }
                
                $scope.registerStep = function (step){
                    switch (step){
                        case 0:
                            //going to step 2
                            break;
                        case 1:
                            //going to step 2
                            break;
                        case 2:
                            //going to step 2
                            break;
                        case 3:
                            //going to step 2
                            break;
                        case 4:
                            //going to step 2
                            break;
                    }
                }

//Tabular view
                //$(document).ready(function () {
                if ($(window).width() <= 480) {
                    // alert('test');
                    // do something for small screens
                    $(".tab_content").hide();
                    // smartphone/iphone... maybe run some small-screen related dom scripting?
                    $(".tab_content:first").hide();
                } else {
                    $(".tab_content:first").show();
                }
                // });



                /* if in tab mode */
                $("ul.tabs li").click(function () {

                    $(".tab_content").hide();
                    var activeTab = $(this).data("rel");
                    $("#" + activeTab).fadeIn();

                    $("ul.tabs li").removeClass("active");
                    $(this).addClass("active");

                    $(".tab_drawer_heading").removeClass("d_active");
                    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

                });
                /* if in drawer mode */
                $(".tab_drawer_heading").click(function () {

                    $(".tab_content").hide();
                    var d_activeTab = $(this).data("rel");
                    $("#" + d_activeTab).fadeIn();

                    $(".tab_drawer_heading").removeClass("d_active");
                    $(this).addClass("d_active");

                    $("ul.tabs li").removeClass("active");
                    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
                });


                /* Extra class "tab_last"
                 to add border to right side
                 of last tab */
                $('ul.tabs li').last().addClass("tab_last");




            }]);