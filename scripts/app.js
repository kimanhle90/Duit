var duitApp = angular.module("duitApp", ["ui.router", "firebase"]);

// duitApp.config(function($stateProvider, $urlRouterProvider) {

// 	console.log("Angular is working");

// 	$urlRouterProvider.otherwise('/home');

// 	$stateProvider
        
//         // HOME VIEWS 
//         .state('home', {
//             url: '/',
//             templateUrl: '../assets/templates/home.html'
//         })
        
//         // HISTORY VIEWS 
//         .state('history', {
//             url: '/history',
//             templateUrl: '../assets/templates/history.html'       
//         });

// });	

duitApp.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
    });
 
   $stateProvider.state('history', {
     url: '/history',
     controller: 'history.controller',
     templateUrl: '../assets/templates/history.html'
   });
 }]);

duitApp.controller('history.controller', ['$scope', function($scope) {

    }]);

