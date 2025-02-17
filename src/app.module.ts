import angular from "angular";
import 'angular-route';  // Import ngRoute for routing
import { MyFirstController } from "./controlller/login.controller";
import { ProductCatalogController } from "./controlller/product.catlog.controller";
import { ProductService }from "./services/product.services";
import { ShoppingController } from "./controlller/shopingController";

angular.module('myApp', ['ngRoute'])
.service('ProductService',ProductService)
.controller('MyFirstController',MyFirstController)
.controller('ProductCatalogController',ProductCatalogController)
.controller('ShoppingController',ShoppingController)
.config(['$routeProvider',($routeProvider:any)=>{
    $routeProvider
    .when('/product',{
        templateUrl:'views/product.html', // Template for the home route
        controller:'ProductCatalogController',// Controller for the home route
        controllerAs: 'productCatalogControllerCtrl' // Use 'homeCtrl' as alias for the controller instance
    })
    .when('/login',{
        templateUrl:'views/login.html',
        controller:'MyFirstController',
        controllerAs: 'myFirstControllerCtrl'
    })
    .when('/cart',{
        templateUrl:'views/shopping_cart.html',
        controller:'ShoppingController',
        controllerAs: 'ShoppingControllerCtrl'
    })
    .otherwise({
        redirectTo: 'product'  // Default route is home
      });
}]);

