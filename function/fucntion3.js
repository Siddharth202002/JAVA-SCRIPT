// arrow functions

// for single parameter
const square=(x)=>x*x
console.log(square(5));

// for multiple parameter and statements

const print=(name,lastName)=>{
    console.log(`my name is ${name} ${lastName}`);
    
    
 }
console.log(print("siddharth","mehendiratta"));

// normal functions
function print(name, lastName){
     console.log(`my name is ${name} ${lastName}`)
    

}

// console.log(print("siddharth","mehendiratta"))
  

// anonymus functions
// a fucntion have no name

// let a= function(x){
//     return x*x
    
// }

// console.log( a(5));

// iffy (immediately invoked functions )

(function (x){
    console.log(x*x);
    console.log("hellow");
    
    
})(5)
 

