import angular from "angular";
import { MyFirstController } from "./controlller/login.controller";
import {ProductCatalogController} from "./controlller/product.catlog.controller";

angular.module('myApp',[])
.controller('MyFirstController',MyFirstController)
.controller('ProductCatalogController',ProductCatalogController)