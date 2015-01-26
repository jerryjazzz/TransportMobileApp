'use strict';
angular.module('TransportMobileApp.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

        // menu code here

    })

    .controller('MainCtrl', function($scope) {

        // main page content

    })

    .controller('CitiesCtrl', function($scope, CityService) {

        CityService.getCities().then(function(data){
            $scope.cities = data;
        });

    })

    .controller('CityTransporterCtrl', function($scope, $stateParams) {

        $scope.test = $stateParams.cityId;

    })

    .controller('TripsCtrl', function($scope, $stateParams, CityService, CityTransporterService, TripService) {

        $scope.predicate = 'time';
        $scope.reverse = false;
        $scope.byTime = true;


        CityService.getCityById($stateParams.cityId).then(function (data) {

            // get city name from the ID
            $scope.cityName = data.name;

            // get all transporters to this city
            $scope.transporters = data.transporters;

        });

        TripService.getTripsToCity($stateParams.cityId).then(function(data){

            $scope.trips = data;

        });

    })

    .controller('ResultsCtrl', function($scope, $stateParams) {

        $scope.city = $stateParams.cityId;
        $scope.transporter = $stateParams.transporterId;

    })

;
