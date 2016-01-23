(function() {
    'use strict';

    angular.module('eventsApp')

        .controller('accountController', accountController);

    accountController.$inject = ['$scope', 'dataService', 'ROLES'];

    function accountController($scope, dataService, ROLES) {
        angular.extend($scope, {
            accounts: []
        });

        angular.extend($scope, {
            getAccounts: function() {
                dataService.getAccounts()
                    .then(function(response) {
                        $scope.accounts = response.data;
                    });
            }
        });

        $scope.getAccounts();
    }
})();

