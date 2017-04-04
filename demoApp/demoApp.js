angular.module('demoApp', ['ngMaterial','md.time.picker'])

  .config(['$mdThemingProvider', function ($mdThemingProvider) {
      'use strict';

      $mdThemingProvider.theme('default')
        .primaryPalette('blue');
  }])

  .controller('demoAppController', ['$scope','$mdpTimePicker', function($scope) {

    $scope.time = {
      twelve: new Date(),
      twentyfour: new Date()
    };

    $scope.message = {
      hour: 'Hour is required',
      minute: 'Minute is required',
      meridiem: 'Meridiem is required'
    }

  }]);
