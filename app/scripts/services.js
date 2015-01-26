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
            }

        }
    })
    .service('CityTransporterService', function($http){
        return {

            getCities: function(){
                return $http.get('http://192.168.15.81/TransportLaravel/public/api/city').then(function(result) {
                    return result.data;
                });
            },

            getCityById: function(id){
                return $http.get('http://192.168.15.81/TransportLaravel/public/api/city',id).then(function(result) {
                    return result.data;
                });
            }

        }
    })
    .service('TripService', function($http){
        return {

            getTrips: function(){
                return $http.get('http://192.168.15.81/TransportLaravel/public/api/trip').then(function(result) {
                    return result.data;
                });
            },

            getTripsToCity: function(id){
                return $http.get('http://192.168.15.81/TransportLaravel/public/api/trip/'+id).then(function(result) {
                    return result.data;
                });
            }

        }
    })
;