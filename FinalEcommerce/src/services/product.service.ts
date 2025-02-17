
export class ProductService
{
    catalogs: Array<any>=[

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
      "imagePath":"https://cpimg.tistatic.com/08062380/b/5/Cycloserine-Capsule.jpg"
      },
  {
      "id": "04",
      "name": "Pyrazinamide",
      "description": "Portable Bluetooth speaker with clear sound and long battery life.",
      "price": "7",
      "imgSrc":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPR-StrFgRNaqI0gxtPbPGqZ0ReRDAtPxVCw&s"
      
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

    constructor() { }

    // Method to get all products
    public getCatalogs(): Array<any> {
      return this.catalogs;
    }

     // Method to get a product by its ID
    public getProductById(productId: number): any 
    {
        let products=null;

        for (let product of this.catalogs) {
            if (product.id === productId) {
                products=product;
                break;
            }
        } 

       return products;
    }

    // Method to add a product to the cart (using sessionStorage)
     public addToCart(product: any): void {
        let cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
         cart.push(product);
         sessionStorage.setItem('cart', JSON.stringify(cart));
  }

  public addToCartDetails(product: any): void {
    let cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
     cart.push(product);
     sessionStorage.setItem('cart', JSON.stringify(cart));
     
}
}