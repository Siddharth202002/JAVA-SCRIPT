function print() {
  let ans = Array.from(arguments);
  let result = ans.map((ele) => ele);
  console.log(result);
}
let arr1 = [1, 2, 3];

let arr2 = {
  0: 1,
  1: 2,
  3: 3,
};

if(typeof arr1 === typeof arr2){
    console.log("yes")
    console.log(arr1[0] , arr2[0])
}else{
    console.log("no")
}