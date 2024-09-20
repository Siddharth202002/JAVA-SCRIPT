function removeDuplicates(shoppingCart) {
  for (let i = 0; i < shoppingCart.length - 1; i++) {
    let first = shoppingCart[i];
    for (let j = i + 1; j < shoppingCart.length; j++) {
      let second = shoppingCart[j];
      if (first === second) {
        shoppingCart[j] = 0;
      }
    }
  }
}

let shoppingCart = ["earpods", "earpods","powerbank", "powerbank", "bangles", "ring","ring"];

removeDuplicates(shoppingCart);

let ans = shoppingCart.filter((ele) => ele!=0
);
ans.map((ele) => {
  console.log(ele);
});
