import angular from "angular";
import 'angular-route';  // Import ngRoute for routing
import { MyFirstController } from "./controlller/login.controller";
import { ProductCatalogController } from "./controlller/product.catlog.controller";

angular.module('myApp', ['ngRoute'])
.controller('MyFirstController',MyFirstController)
.controller('ProductCatalogController',ProductCatalogController)

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
    .otherwise({
        redirectTo: 'product'  // Default route is home
      });
}]);

