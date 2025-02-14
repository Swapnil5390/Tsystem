var MyFirstController = /** @class */ (function () {
    function MyFirstController($scope) {
        this.user = {
            "email": "swappy8686@gmail.com",
            "password": "Swappy@5390"
        };
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
        $scope['vm'] = this;
    }
    MyFirstController.prototype.onValidate = function () {
        if (this.user.email === "swappy8686@gmail.com" && this.user.password === "Swappy@5390") {
            console.log("Welcome To Store");
            alert("Welcome To Store");
        }
        else {
            console.log("Invalid");
            alert("Invalid");
        }
    };
    return MyFirstController;
}());