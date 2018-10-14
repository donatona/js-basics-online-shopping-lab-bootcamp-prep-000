var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
// //need a way to create the Object so this function passes the test (Error: Expected [Function: String] to equal [Function: Object]
//       + expected - actual)
getCart().push(item);
return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
