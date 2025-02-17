var ProductService = /** @class */ (function () {
    function ProductService($http, $locaiton) {
        this.$http = $http;
        this.$locaiton = $locaiton;
    }
    ProductService.prototype.getProductsData = function () {
        return this.$http.get("./product.data.json");
    };
    ProductService.prototype.getCartProducts = function () {
        var tempdata = JSON.parse(sessionStorage.getItem('cartProducts') || '[]');
        return tempdata != null ? tempdata.length : 0;
    };
    ProductService.prototype.getCartProductsCount = function () {
        var tempdata = JSON.parse(sessionStorage.getItem('cartProducts') || '[]');
        return tempdata != null ? tempdata.length : 0;
    };
    ProductService.prototype.addProductToCart = function (product) {
        sessionStorage.setItem('cartProducts', JSON.stringify(product));
    };
    ProductService.prototype.setUserLogin = function () {
        sessionStorage.setItem('isLoggedIn', '1');
    };
    ProductService.prototype.setUserLogOut = function () {
        sessionStorage.setItem('isLoggedIn', '0');
    };
    ProductService.prototype.getLoggedInUser = function () {
        var temp = sessionStorage.getItem('isUserLoggedIn');
        if (temp == '1') {
            return true;
        }
        return false;
    };
    ProductService.prototype.setRoute = function (path) {
        this.$locaiton.path('/' + path);
    };
    ProductService.$inject = ['$http', '$location'];
    return ProductService;
}());

