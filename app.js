var app = angular.module("clockApp", []);
app.controller("TimeCtrl", TimeCtrl);

function TimeCtrl($scope) {
  var currDate = new Date();
  $scope.timeString = currDate.toTimeString();
  $scope.updateTime = function() {
      var currDate = new Date();
      $scope.timeString = currDate.toTimeString();
  }
}
