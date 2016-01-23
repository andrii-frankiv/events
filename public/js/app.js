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
                    url: '/users',
                    templateUrl: 'views/partial-users.html'
                });
        });
})();
