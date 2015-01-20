'use strict';
angular.module('TransportMobileApp.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

      // menu code here

    })

    .controller('MainCtrl', function($scope) {

      // main page content

    })

    .controller('CitiesCtrl', function($scope) {
      $scope.cities = [
        { name: 'Skopje', id: 1 },
        { name: 'Prilep', id: 2 },
        { name: 'Struga', id: 3 },
        { name: 'Bitola', id: 4 },
        { name: 'Resen', id: 5 },
        { name: 'Kicevo', id: 6 }
      ];
    })

    .controller('CityTransporterCtrl', function($scope, $stateParams) {

      $scope.test = $stateParams.cityId;

    })

    .controller('ResultsCtrl', function($scope, $stateParams) {

      $scope.city = $stateParams.cityId;
      $scope.transporter = $stateParams.transporterId;

    })

;
