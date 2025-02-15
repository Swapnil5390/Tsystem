
import { IScopeCustom } from "../interfaces/iscope.interface";
import { ProductService } from "../services/product.services";

export class MyFirstController{
    static $inject=['$scope','$location','ProductService'];
   email: string='';
   password: string ='';
    constructor(private $scope:IScopeCustom, private $location: angular.ILocationService,private productService : ProductService){
        
     this.productService.setUserLogOut()
    }

    users=[{"email":"pawar3382@gamil.com",
            "password":"123"
        },
        {
            "email":"swappy8686@gmail.com",
            "password":"Swappy@5390"
        },
        {
            "email":"vaibhav@gamil.com",
            "password":"12365"
        },
        {
            "email":"nasir@gamil.com",
            "password":"12345"
        },
        {
            "email":"pravim@gamil.com",
            "password":"123456"
        }
    ]

    onValidate(){
        if(this.email ==="swapnil" && this.password ==="swapnil"){
            this.productService.setUserLogin();
            this.productService.setRoute('product')
            }
    }

    getLoggedInUser(){
        return this.productService.getLoggedInUser();
    }
    checkIfLoginPage(){
        if(this.$location.path() !='/login'){
            return true;
        }
        return false;

    }
    logoutUser(){
        return this.productService.setUserLogOut();
    }
    
}