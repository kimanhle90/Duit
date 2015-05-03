var duitApp = angular.module("duitApp", ["ui.router", "firebase"]);

duitApp.config(function($stateProvider, $urlRouterProvider) {

	console.log("Angular is wokring");

	$urlRouterProvider.otherwise('/home');

	$stateProvider
        
        // HOME VIEWS 
        .state('home', {
            url: '/',
            templateUrl: '../assets/templates/home.html'
        })
        
        // HISTORY VIEWS 
        .state('history', {
            url: '/history',
            templateUrl: '../assets/templates/history.html'       
        });

});	