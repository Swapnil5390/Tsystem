
angular.module('myApp', ['ngRoute'])
    .controller('ProductCatalogController', ProductCatalogController)
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/product', {
            templateUrl: 'views/product.html', // Template for the home route
            controller: 'ProductCatalogController', // Controller for the home route
            controllerAs: 'productCatalogControllerCtrl' // Use 'homeCtrl' as alias for the controller instance
        })
            .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'MyFirstController',
            controllerAs: 'myFirstControllerCtrl'
        })
            .otherwise({
            redirectTo: 'product' // Default route is home
        });
    }]);
