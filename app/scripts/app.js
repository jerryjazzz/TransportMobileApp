'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('TransportMobileApp', [
    'ionic',
    'config',
    'TransportMobileApp.controllers',
    'TransportMobileApp.services',
    'TransportMobileApp.directives'
])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    .constant("apiConfig", {
        "url": "http://192.168.15.81/TransportLaravel/public/"
    })

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider

          .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
          })

          .state('app.search', {
            url: '/search',
            views: {
              'menuContent' :{
                templateUrl: 'templates/search.html'
              }
            }
          })

          .state('app.main', {
            url: '/main',
            views: {
              'menuContent' :{
                templateUrl: 'templates/main.html',
                controller: 'MainCtrl'
              }
            }
          })

          .state('app.singleTransporter', {
              url: '/transporters',
              views: {
                  'menuContent' :{
                      templateUrl: 'templates/transporters.html',
                      controller: 'TransportersCtrl'
                  }
              }
          })

          .state('app.transporter', {
              url: '/transporters/:transporterId',
              views: {
                  'menuContent' :{
                      templateUrl: 'templates/transporter.html',
                      controller: 'TransporterCtrl'
                  }
              }
          })

          .state('app.cities', {
            url: '/cities',
            views: {
              'menuContent' :{
                templateUrl: 'templates/cities.html',
                controller: 'CitiesCtrl'
              }
            }
          })

          .state('app.singleCity', {
            url: '/cities/:cityId/transporters',
            views: {
              'menuContent' :{
                templateUrl: 'templates/city.html',
                controller: 'CityTransporterCtrl'
              }
            }
          })

          .state('app.trips', {
              url: '/trips/:cityId',
              views: {
                  'menuContent' :{
                      templateUrl: 'templates/trips.html',
                      controller: 'TripsCtrl'
                  }
              }
          })

          .state('app.results', {
            url: '/cities/:cityId/transporters/:transporterId',
            views: {
              'menuContent' :{
                templateUrl: 'templates/results.html',
                controller: 'ResultsCtrl'
              }
            }
          })
      ;
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/main');
    });

