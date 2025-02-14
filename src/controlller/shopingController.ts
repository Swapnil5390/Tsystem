
import { IScopeCustom } from "../interfaces/iscope.interface";
export class ShoppingController{

     static $inject =['$scope']
        constructor($scope:IScopeCustom)
        {
             $scope['vm']=this;
        }
}