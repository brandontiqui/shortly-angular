angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {url: ''};
  $scope.addLink = function() {
    console.log(typeof $scope.link.url);
    console.log($scope.link.url);
    Links.addOne($scope.link.url);
  };
});
