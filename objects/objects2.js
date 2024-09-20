// methods of objects

const car={company:"honda",name:"city",price:500000}
// Object.freeze(car)
//  Object.seal(car)
car.company="kia"
car.year=2012
console.log(car);

// const key=Object.keys(car)
// console.log(key);
// const value=Object.values(car)
// console.log(value);
// const whole=Object.entries(car)
// console.log(whole);

// assign an object to the other object
let a=Object.assign({},car)
console.log(a);



