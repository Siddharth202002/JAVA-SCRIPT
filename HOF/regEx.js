let pattern='pw'
let flag='gi';
let regExOne=new RegExp(pattern,flag)
const str1='pwskills , I am the student of the pw skill and i am doing the course full stack web development ,thanks pw skills'
// let ans=regExOne.test(str1)
// console.log(ans);
// let ans3=str1.match(regExOne)
// console.log(ans3 );

let result=str1.replace(regExOne,'p-w')
console.log(result);




// let regExThree=/pw/gi
// let ans1=regExThree.test(str1)
// console.log(ans1);


