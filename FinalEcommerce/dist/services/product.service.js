var ProductService = /** @class */ (function () {
    function ProductService() {
        this.catalogs = [

            {
                "id": "01",
                "name": "Amikacin",
                "description": "Amikacin is an antibiotic used to prevent or treat a wide variety of bacterial infections.",
                "price": "89",
                "imagePath": "https://t4.ftcdn.net/jpg/02/81/42/77/240_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
            },
            {
                "id": "02",
                "name": "Amoxicillin",
                "description": "The drug is used to treat bacterial infections such as middle ear infection, strep throat.",
               "price": "99",
                "imagePath": "https://5.imimg.com/data5/SELLER/Default/2024/9/450540362/KW/FX/TH/105598555/500mg-amoxicillin-capsule.jpg"
            },
            {
                "id": "03",
                "name": "Cycloserine",
                "description": "is a GABA transaminase inhibitor and an antibiotic, used to treat tuberculosis",
                "price": "30",
                "imagePath": "https://cpimg.tistatic.com/08062380/b/5/Cycloserine-Capsule.jpg"
            },
            {
                "id": "04",
                "name": "Pyrazinamide",
                "description": "Portable Bluetooth speaker with clear sound and long battery life.",
                "price": "7",
                "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPR-StrFgRNaqI0gxtPbPGqZ0ReRDAtPxVCw&s"
                
        }, 
         {
          "id": "05",
          "name": "Amoxicillin",
          "description": "The drug is used to treat bacterial infections such as middle ear infection, strep throat.",
          "price": "99",
          "imagePath": "https://5.imimg.com/data5/SELLER/Default/2024/9/450540362/KW/FX/TH/105598555/500mg-amoxicillin-capsule.jpg"
      }, 
       {
        "id": "06",
        "name": "Amoxicillin",
        "description": "The drug is used to treat bacterial infections such as middle ear infection, strep throat.",
        "price": "99",
        "imagePath": "https://5.imimg.com/data5/SELLER/Default/2024/9/450540362/KW/FX/TH/105598555/500mg-amoxicillin-capsule.jpg"
      }
        ];
    }
    // Method to get all products
    ProductService.prototype.getCatalogs = function () {
        return this.catalogs;
    };
    // Method to get a product by its ID
    ProductService.prototype.getProductById = function (productId) {
        var products = null;
        for (var _i = 0, _a = this.catalogs; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.id === productId) {
                products = product;
                break;
            }
        }
        return products;
    };
    // Method to add a product to the cart (using sessionStorage)
    ProductService.prototype.addToCart = function (product) {
        var cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
    };
    ProductService.prototype.addToCartDetails = function (product) {
        var cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
    };
    return ProductService;
}());