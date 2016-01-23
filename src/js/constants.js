(function() {
    'use strict';

    angular.module('eventsApp')
        .constant('API_URL', '/data')
        .constant('ROLES', ['admin', 'manager', 'user']);
})();

