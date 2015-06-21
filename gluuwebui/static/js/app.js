var gluuwebui = angular.module('gluuwebui', [
        'ngRoute',
        'webuiControllers'
        ]);


gluuwebui.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/view/:resource', {
            templateUrl: 'templates/interface.html',
            controller: 'OverviewController'
        }).
        when('/:resource/:action/:id?',{
            templateUrl: function(params) {
                var resource = params.resource;
                var template = "";
                switch( resource ){
                    case 'license_credential': template = 'templates/new_license_credential.html';
                                               break;
                    case 'license': template = 'templates/new_license.html';
                                    break;
                    case 'provider': template = 'templates/new_provider.html';
                                     break;
                    case 'cluster': template = 'templates/new_cluster.html';
                                    break;
                    case 'node': template = 'templates/new_node.html';
                                 break;
                    default: template = 'templates/error.html';
                }
                return template;
            },
            controller: 'ResourceController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
