var MyFirstController = /** @class */ (function () {
    function MyFirstController($scope, $location, productService) {
        this.$scope = $scope;
        this.$location = $location;
        this.productService = productService;
        this.email = '';
        this.password = '';
        this.users = [{ "email": "pawar3382@gamil.com",
                "password": "123"
            },
            {
                "email": "swappy8686@gmail.com",
                "password": "Swappy@5390"
            },
            {
                "email": "vaibhav@gamil.com",
                "password": "12365"
            },
            {
                "email": "nasir@gamil.com",
                "password": "12345"
            },
            {
                "email": "pravim@gamil.com",
                "password": "123456"
            }
        ];
        this.productService.setUserLogOut();
    }
    MyFirstController.prototype.onValidate = function () {
        if (this.email === "swapnil" && this.password === "swapnil") {
            this.productService.setUserLogin();
            this.productService.setRoute('product');
        }
    };
    MyFirstController.prototype.getLoggedInUser = function () {
        return this.productService.getLoggedInUser();
    };
    MyFirstController.prototype.checkIfLoginPage = function () {
        if (this.$location.path() != '/login') {
            return true;
        }
        return false;
    };
    MyFirstController.prototype.logoutUser = function () {
        return this.productService.setUserLogOut();
    };
    MyFirstController.$inject = ['$scope', '$location', 'ProductService'];
    return MyFirstController;
}());

