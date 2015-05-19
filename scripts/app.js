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
  controller: 'home.controller',  //Define as a controller
  templateUrl: '/assets/templates/home.html'
});
 
 $stateProvider.state('history', {
   url: '/history',
   controller: 'history.controller',
   templateUrl: '/assets/templates/history.html'
 });
}]);

duitApp.controller('home.controller',['$scope', function($scope) {
}]);

duitApp.controller('history.controller',['$scope', function($scope) {
}]);


// // This part triggers firebase data
// duitApp.controller("FirebaseCtrl", ["$scope", "$firebaseArray",
//   function($scope, $firebaseArray) {
//     var ref = new Firebase("https://duit.firebaseio.com/tasks");
//     $scope.tasks = $firebaseArray(ref);

//   // add new items to the array
//   // the message is automatically added to Firebase!
//   $scope.addTask = function() {
//     $scope.tasks.$add({
//       info: $scope.newTaskInfo,
//       priority: $scope.newTaskPriority,

//     });
//   };


duitApp.controller("FirebaseCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://duit.firebaseio.com/tasks");

  $scope.tasks = $firebaseArray(ref);

  $scope.addTask = function() {
    $scope.tasks.$add({
      text: $scope.newTaskText,
    });
  };

});



// End App Module

})();

// Add task input field/button
// Set an attribute on task object to track completion status
// In Angular view only show/hide tasks based on completion status
// Create a condition that checks if date of object is >2 weeks from now

