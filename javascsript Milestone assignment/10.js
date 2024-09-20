let cart = [2, 3, 5, 8, 10];
doubleValue(cart);

function doubleValue(cart) {
  for (let i = 0; i < cart.length; i++) {
    cart[i] = cart[i] * 2;
  }
}
console.log(cart);
