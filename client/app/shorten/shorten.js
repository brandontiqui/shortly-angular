angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {url: ''};
  $scope.urls = [];

  $scope.addLink = function() {
    console.log(typeof $scope.link.url);
    console.log($scope.link.url);
    Links.addOne($scope.link.url)
      .then(function(response) {
        console.log('response from addLink', response);
        $scope.urls.push(response);
        console.log($scope.urls);
        console.log($scope.urls[0].data.title);
      });
  };
});
