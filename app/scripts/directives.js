/**
 * Created by tunte on 1/23/15.
 */
angular.module('TransportMobileApp.directives', [])
    .directive('loader', function(){
        return {
            restrict: 'E',
            scope: {
                item: '='
            },
            templateUrl: 'templates/elements/loader.html'
        };
    });