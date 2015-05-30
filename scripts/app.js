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

duitApp.controller('home.controller',['$scope', function($scope) {
}]);

duitApp.controller('history.controller',['$scope', function($scope) {
}]);


duitApp.controller("FirebaseCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://duit.firebaseio.com/tasks");

  $scope.tasks = $firebaseArray(ref);


  $scope.priorityOptions = [
  { name: 'High', value: 'High' }, 
  { name: 'Medium', value: 'Medium' }, 
  { name: 'Low', value: 'Low' }
  ];

  $scope.priority = {type: $scope.priorityOptions[0].value};

  

  $scope.addTask = function() {
    var timestamp = new Date();
    var timestampDate = timestamp.getDate();
    var timestampMonth = timestamp.getMonth();
    $scope.tasks.$add({
      text: $scope.newTaskText,
      priority: $scope.priority.type,
      date: timestampDate,
      month: timestampMonth,
      completed: false,
    });
  };

  // Compare task date with current date
  $scope.checkDate = function(task) {
    var today = new Date();
    var todayDate = today.getDate();
    var todayMonth = today.getMonth();

    if (task.date + 7 <= todayDate && task.month <= todayMonth)
      {return true}
    else {return false}
  };

  // Mark task as completed
  $scope.changeState = function(task) {
    // task.completed = true;
    task.completed = true;
    // $scope.tasks.set({task});
        console.log(task);

    var taskRef = new Firebase('https://duit.firebaseio.com/tasks/' + task.$id);

    taskRef.update({"completed": true});
  }

  // Mark task as incomplete
  $scope.changeStateAgain = function(task) {
    // task.completed = true;
    task.completed = false;
    // $scope.tasks.set({task});
        console.log(task);

    var taskRef = new Firebase('https://duit.firebaseio.com/tasks/' + task.$id);

    taskRef.update({"completed": false});
  }

});

// End App Module

})();

function submitForm() {
 document.forms["myForm"].reset();
}



// Add task input field/button
// Set an attribute on task object to track completion status
// In Angular view only show/hide tasks based on completion status
// Create a condition that checks if date of object is >2 weeks from now

