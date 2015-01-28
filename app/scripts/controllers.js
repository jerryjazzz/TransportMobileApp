'use strict';
angular.module('TransportMobileApp.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

        // menu code here

    })

    .controller('MainCtrl', function($scope, CityService, apiConfig) {

        $scope.drawResult = function(text){
            if(text.length > 0){

                CityService.getCityByName(text).then(function(data) {
                    $scope.cities = data;
                });

            } else {
                $scope.cities = {};
            }
        }

    })

    .controller('CitiesCtrl', function($scope, CityService) {

        CityService.getCities().then(function(data){
            $scope.cities = data;
        });

    })

    .controller('TransportersCtrl', function($scope, TransporterService) {

        TransporterService.getTransporters().then(function(data){
            $scope.transporters = data;
        });

    })

    .controller('TransporterCtrl', function($scope, $stateParams, TransporterService) {

        TransporterService.getTransporterById($stateParams.transporterId).then(function(data){
            $scope.transporter = data;
        });

    })

    .controller('CityTransporterCtrl', function($scope, $stateParams) {

        $scope.test = $stateParams.cityId;

    })

    .controller('TripsCtrl', function($scope, $stateParams, CityService, TripService) {

        $scope.predicate = 'time';
        $scope.reverse = false;
        $scope.byTime = true;

        $scope.hasData = false;


        CityService.getCityById($stateParams.cityId).then(function (data) {

            // get city name from the ID
            $scope.cityName = data.name;

            // get all transporters to this city
            $scope.transporters = data.transporters;

        });

        TripService.getTripsToCity($stateParams.cityId).then(function(data){

            $scope.trips = data;
            if($scope.trips.length){
                $scope.hasData = true;
            }

        });

    })

    .controller('ResultsCtrl', function($scope, $stateParams) {

        $scope.city = $stateParams.cityId;
        $scope.transporter = $stateParams.transporterId;

    })

;
