var ProductCatalogController = /** @class */ (function () {
    function ProductCatalogController($scope) {
        this.products = [
            {
                id: '01',
                name: 'Amikacin',
                UnitsPerPack: '10',
                price: '89',
                imgSrc: 'https://www.google.com/imgres?q=Amikacin%20jpg&imgurl=https%3A%2F%2Fbsg-i.nbxc.com%2Fproduct%2Fc9%2F54%2F9e%2F659390d7386557b6c998d410e6.jpg%4095Q.webp&imgrefurl=https%3A%2F%2Fwww.nouvasant.com%2Fantibiotic-antimicrobial%2F50299376.html&docid=RC7RBhDN3BFY9M&tbnid=ZIgEKrfswkoUBM&vet=12ahUKEwjK_sm_0L6LAxXV0wIHHZsmASAQM3oECHoQAA..i&w=1000&h=664&hcb=2&ved=2ahUKEwjK_sm_0L6LAxXV0wIHHZsmASAQM3oECHoQAA'
            },
            {
                id: '02',
                name: 'Amoxicillin',
                UnitsPerPack: '15',
                price: '99',
                imgSrc: 'https://www.google.com/imgres?q=Amoxicillin%20jpg&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F1e%2FAmoxicillin.JPG%2F800px-Amoxicillin.JPG&imgrefurl=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AAmoxicillin.JPG&docid=ZM582Qv4cplgdM&tbnid=L8usMv0BHThiwM&vet=12ahUKEwiGvu-u0L6LAxXP3gIHHd7qObEQM3oECBUQAA..i&w=800&h=619&hcb=2&ved=2ahUKEwiGvu-u0L6LAxXP3gIHHd7qObEQM3oECBUQAA'
            },
            {
                id: '03',
                name: 'Cycloserine',
                UnitsPerPack: '100',
                price: '30',
                imgSrc: 'https://www.google.com/imgres?q=Cycloserine%20jpg&imgurl=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2020%2F11%2FAY%2FKZ%2FGX%2F38103990%2Fcycloserine-capsules-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fcycloserine-capsules-22858800955.html&docid=DvSWBJrLrT2uBM&tbnid=CVJk9UVv4tzLFM&vet=12ahUKEwj-tq2g0L6LAxV5xgIHHQHGLr0QM3oECBcQAA..i&w=500&h=500&hcb=2&ved=2ahUKEwj-tq2g0L6LAxV5xgIHHQHGLr0QM3oECBcQAA'
            },
            {
                id: '04',
                name: 'Pyrazinamide',
                UnitsPerPack: '120',
                price: '7',
                imgSrc: 'https://www.google.com/imgres?q=Pyrazinamide%20jpg&imgurl=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2024%2F2%2F389128558%2FCJ%2FBM%2FMK%2F109604861%2Fp-zide-1gm-tablet-1.jpg&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fpyrazinamide-750mg-tablets-2853445406791.html&docid=XS2urAYva2SfyM&tbnid=nslyhT8S_lssBM&vet=12ahUKEwiVk5vn0L6LAxX1_7sIHapDBQ0QM3oECHwQAA..i&w=1000&h=1200&hcb=2&ved=2ahUKEwiVk5vn0L6LAxX1_7sIHapDBQ0QM3oECHwQAA'
            }
        ];
        $scope['vm'] = this;
    }
    return ProductCatalogController;
}());

