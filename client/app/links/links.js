angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.data.filter = '';
  $scope.data.number = 3;
  Links.getAll().then(function(response) {
    $scope.data.links = response.sort(function(a, b) {
      return b.visits - a.visits;
    });
    console.log('links data links array: ', $scope.data.links);
  });

});
