(function(){

  // Start App Module
var duitApp = angular.module("duitApp", ['ui.router', 'firebase']);

// This part control App Views

duitApp.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
 $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});

 $stateProvider.state('home', {
  url: '/',
  controller: 'home.controller',
  templateUrl: '/assets/templates/home.html'
 });
 
 $stateProvider.state('history', {
   url: '/history',
   controller: 'history.controller',
   templateUrl: '/assets/templates/history.html'
 });
}]);


// This part triggers firebase data
duitApp.controller("FirebaseCtrl", ["$scope", "$firebase", 
  function ($scope, $firebase) {
  var ref = new Firebase("https://duit.firebaseio.com/");

}]);

// End App Module

})();


