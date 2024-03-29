(function() {
    'use strict';

    angular.module('eventsApp')

        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/dashboard');

            $stateProvider

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
        }]);
})();

