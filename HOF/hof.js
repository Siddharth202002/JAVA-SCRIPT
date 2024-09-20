// HOF(higher order functions)
// function pass as a parameter
// let val=(n)=>{
//     return n**2;

// }

// function cubeVal(val,n){
//     return val(n)*n
// }

// let ans=cubeVal(val,3)
// console.log(ans);

// a function return a function

// function sum() {
//   return () => {
//     console.log("hellow siddharth");
//   };
// }
// let ans = sum();
// console.log(ans());

// fucntion inside a fucntion
// function higherOrder(m){
//     function hellow(n){
//         function hey(o){
//             return m+n+o
//         }
//         return hey
//     }
//     return hellow

// }

// let ans=higherOrder(2)(3)(5)
// console.log(ans);

// pass an array in the function
// let arr=[1,2,3,4]
// let sumArray=()=>{
//     let total=0;
//     arr.forEach(element => {
//         total+=element

        
//     });
//     return total
// }

// let ans=sumArray(arr)
// console.log(ans);

// set interval function
function print(){
    console.log("hellow ",Math.random());
    

 }
// setInterval(print,1000);

// set timeout function

setTimeout(print,5000)

 





