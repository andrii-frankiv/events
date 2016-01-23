angular.module('eventsApp')

    .controller('accountController', ['$scope', '$http', 'API_URL', function ($scope, $http, API_URL) {
        angular.extend($scope, {
            accounts: []
        });

        angular.extend($scope, {
            getAccounts: function () {
                $http.get(API_URL + '/accounts')
                    .then(function successCallback(response) {
                        console.log(response);

                        $scope.accounts = response.data;
                    })
            }
        });

        $scope.getAccounts();
    }]);