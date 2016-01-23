/** Front-end starting point */
(function() {
    var eventsApp = angular.module('eventsApp', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/dashboard');

            $stateProvider

                /** Dashboard main page */
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'views/partial-dashboard.html'
                })

                .state('events', {
                    url: '/events',
                    templateUrl: 'views/partial-events.html'
                })

                .state('users', {
                    url: '/accounts',
                    controller: 'accountController',
                    templateUrl: 'views/partial-accounts.html'
                });
        })

        .constant('API_URL', '/data')

        .controller('accountController', function($scope, $http, API_URL) {
            angular.extend($scope, {
                accounts: []
            });

            angular.extend($scope, {
                getAccounts: function() {
                    $http.get(API_URL + '/accounts')
                        .then(function successCallback(response) {
                            console.log(response);

                            $scope.accounts = response.data;
                        })
                }
            });

            $scope.getAccounts();
        });
})();
