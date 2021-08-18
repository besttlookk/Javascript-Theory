// module name should be camelCase
console.log("Exporting module");

// variables that are defined in the module are scoped inside the module.
// that means all top level variable are private inside this module unlik e traditonal script
const shippingCost = 10;
export const cart = [];

// named export : export can only happen in top level code
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// way to export multiple things
export { totalPrice, totalQuantity as tq };

// DEFAULT EXPORT : one default export per module
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
