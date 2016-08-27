// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.user.error = '';

  $scope.signin = function () {
    if ($scope.validate()) {
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  $scope.signup = function () {
    if ($scope.validate()) {
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  $scope.validate = function () {
    console.log('USERNAME TYPE: ', typeof $scope.user.name);
    console.log('USERNAME: ', $scope.user.username);
    console.log('PASSWORD TYPE: ', typeof $scope.user.password);
    console.log('PASSWORD: ', $scope.user.password);
    var validType = typeof $scope.user.username === 'string' && typeof $scope.user.password === 'string';
    var validLength = $scope.user.username !== '' && $scope.user.password !== '';

    if (validType && validLength) {
      return true;
    } else {
      $scope.user.error = 'Enter a valid username and/or password.';
      return false;
    }
  };
});
