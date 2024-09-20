// let a ={name:"siddharth", lastName:"mehendiratta"}
// console.log(a['name']);
// a.name="sidhu"
// console.log(a.name);


// creating a object with three types

// first type using a {}
let car={company:"kia",name:"seltos"}

// second type usig new keyword
let bike = new Object()
bike.company="royal enfield"
bike.name="classic 350"

console.log(bike);

// using functions

function mobilephone(n,b,p){
    this.name="iphone 14"
    this.battery="5000 MAH"
    this.price=50000
}

let phone=new mobilephone()
console.log(phone);



