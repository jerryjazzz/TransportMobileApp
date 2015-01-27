/**
 * Created by tunte on 1/23/15.
 */
/**
 * Created by tunte on 1/23/15.
 */
'use strict';
angular.module('TransportMobileApp.services', [])
    .service('CityService', function($http){
        return {

            getCities: function(){
                return $http.get('http://192.168.15.81/TransportLaravel/public/api/city').then(function(result) {
                    return result.data;
                });
            },

            getCityById: function(id){
                return $http.get('http://192.168.15.81/TransportLaravel/public/api/city/' + id).then(function(result) {
                    return result.data;
                });
            },

            getCityByName: function(text){
                return $http.get('http://192.168.15.81/TransportLaravel/public/cities/' + text).then(function(result) {
                    return result.data;
                });
            }

        }
    })
    .service('TransporterService', function($http, apiConfig){
        return {

            getTransporters: function(){
                return $http.get(apiConfig.url + 'api/transporter').then(function(result) {
                    return result.data;
                });
            },

            getTransporterById: function(id){
                return $http.get(apiConfig.url + 'api/transporter/' + id).then(function(result) {
                    return result.data;
                });
            }

        }
    })
    .service('CityTransporterService', function($http, apiConfig){
        return {

            getCities: function(){
                return $http.get(apiConfig.url + 'api/city').then(function(result) {
                    return result.data;
                });
            },

            getCityById: function(id){
                return $http.get(apiConfig.url + 'api/city',id).then(function(result) {
                    return result.data;
                });
            }

        }
    })
    .service('TripService', function($http, apiConfig){
        return {

            getTrips: function(){
                return $http.get(apiConfig.url + 'api/trip').then(function(result) {
                    return result.data;
                });
            },

            getTripsToCity: function(id){
                return $http.get(apiConfig.url + 'api/trip/'+id).then(function(result) {
                    return result.data;
                });
            }

        }
    })
;