(function() {
    'use strict';

    angular.module('eventsApp')

        .factory('dataService', dataService);

    dataService.$inject = ['$http', 'API_URL'];

    function dataService($http, API_URL) {

        return {
            getAccounts: getAccounts
        };

        function getAccounts() {
            return $http.get(API_URL + '/accounts');
        }


    }
})();