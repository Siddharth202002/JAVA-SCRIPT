// function diff(set1, set2) {
//   return new Set([...set1].filter((ele) => !set2.has(ele)));
// }

// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([2, 8, 3, 9]);

// console.log(diff(set1, set2));

// let arr=[1,2,3,4,4]
// let ans= new Set(arr)
// console.log(ans);

let obj={
    name:"siddharth",
    age:22,
    salary:{
        sid:10000,
        shrish:10000

    }
}

let {name,age,salary:{sid,shrish}}=obj
console.log(name);
console.log(age);

console.log(sid);
console.log(shrish);





