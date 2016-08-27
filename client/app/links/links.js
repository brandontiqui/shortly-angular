angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  Links.getAll().then(function(response) {
    $scope.data.links = response;
    console.log('links data links array: ', $scope.data.links);
  });

});
