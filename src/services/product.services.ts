import angular from "angular";
import { Product } from "../models/product.model";

export class ProductService {

    static $inject = ['$http', '$location'];

    constructor(private $http: angular.IHttpService, private $locaiton: angular.ILocationService) {

    }

    public getProductsData(): angular.IHttpPromise<Product[]> {
        return this.$http.get("./product.data.json");
    }

    public getCartProducts(): Product[] {
        return JSON.parse(JSON.stringify(sessionStorage.getItem('cartProducts')));
    }

    public addProductToCart(product: Product) {
        sessionStorage.setItem('cartProducts', JSON.stringify(product));
    }

    public setUserLogin() {
        sessionStorage.setItem('isLoggedIn', '1');
    }
    public setUserLogOut() {
        sessionStorage.setItem('isLoggedIn', '0');
    }

    public getLoggedInUser() {
        let temp = sessionStorage.getItem('isUserLoggedIn');
        if (temp == '1') {
            return true;
        }
        return false;
    }

    public setRoute(path: string) {
        this.$locaiton.path('/' + path);
    }

}