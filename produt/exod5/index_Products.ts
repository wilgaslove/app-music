import { Product } from "./src/Product";
import { Details, MockDetails, MockDelivery, Delivery } from "./src/data/MockProducts";



let products: Array<Product<Details, Delivery>> = [];
//parcourir ce tableau Array<Details> pour en extraire 
MockDetails.forEach((detail: Details) => {
    const detailId = detail.id;
    const mockDelivery = MockDelivery.find((el)=>el.id === detailId); //

    products.push(new Product<Details, Delivery>(detail, mockDelivery.delivery));
});

console.log(products);

let special = products.filter((el) => el.option === Delivery.Special);
console.log("***  SPECIAL ~ PRODUCTS ****");
console.log(special);




