let bigBrother = {
  bigBrotherName: "siddharth",
  bigBrotherAge: 21,
 
};
let smallBrother = {
  name: "pola",
  age: 18,
  // one way to declare
  // __proto__:bigBrother
};
// second way to declare=first way
// smallBrother.__proto__=bigBrother

// third way to declare and most advanced way
// Object.setPrototypeOf(bigBrother, smallBrother);

// console.log(smallBrother.bigBrother); error=>undefined

// string prototyping


let name="  siddhart    "
name.print()


String.prototype.trueLength=function(){
    return this.trim().length
    
    

}


// console.log(name.trueLength());


