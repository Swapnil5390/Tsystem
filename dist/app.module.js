
angular.module('myApp', ['ngRoute'])
    .service('ProductService', ProductService)
    .controller('MyFirstController', MyFirstController)
    .controller('ProductCatalogController', ProductCatalogController)
    .controller('ShoppingController', ShoppingController)
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
            .when('/cart', {
            templateUrl: 'views/shopping_cart.html',
            controller: 'ShoppingController',
            controllerAs: 'ShoppingControllerCtrl'
        })
            .otherwise({
            redirectTo: 'product' // Default route is home
        });
    }]);
