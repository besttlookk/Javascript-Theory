// importig module
// import "./shoppingCart.js"; //importing file will be executed first
// ----------------------------------------------------------------------
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

// console.log("Importing Module");
// addToCart("bread", 5);
// console.log(price, tq);

// ------------------------------------------------------------------------
// import * as ShoppingCart from "./shoppingCart.js"; // IMPORTING EVERYTHING IN A OBJECT // exporting a public api just like classes
// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice);

// -----------------------------------------------------------------------
import add, { cart } from "./shoppingCart.js"; // we can give any name to default export
add("pizza", 2);
add("bread", 5);
add("apples", 4);

// import-export connection is live
console.log(cart);

// this code will only understand by parcel
// it will not be part of final build
// page wont re-load when js is changed
if (module.hot) {
}
module.hot.accept();
