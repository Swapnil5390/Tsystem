var ProductCatalogController = /** @class */ (function () {
    function ProductCatalogController($scope) {
        this.products = [
            {
                id: '01',
                name: 'Amikacin',
                UnitsPerPack: '10',
                price: '89',
                imgSrc: 'https://t4.ftcdn.net/jpg/02/81/42/77/240_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg'
            },
            {
                id: '02',
                name: 'Amoxicillin',
                UnitsPerPack: '15',
                price: '99',
                imgSrc: 'https://5.imimg.com/data5/SELLER/Default/2024/9/450540362/KW/FX/TH/105598555/500mg-amoxicillin-capsule.jpg'
            },
            {
                id: '03',
                name: 'Cycloserine',
                UnitsPerPack: '100',
                price: '30',
                imgSrc: 'https://cpimg.tistatic.com/08062380/b/5/Cycloserine-Capsule.jpg'
            },
            {
                id: '04',
                name: 'Pyrazinamide',
                UnitsPerPack: '120',
                price: '7',
                imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPR-StrFgRNaqI0gxtPbPGqZ0ReRDAtPxVCw&s'
            }
        ];
        //this.getProductsData();
        $scope['vm'] = this;
    }
    ProductCatalogController.$inject = ['$scope'];
    return ProductCatalogController;
}());

