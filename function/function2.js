// passing the array as an paramenter

// function printArray([num1 ,num2]){

//     console.log(num1,num2);
    
    // for(let i=0;i<array1.length;i++){
    //     console.log(array1[i]);
        

    // }
// }


// let a=new Array(1,2,3,4)
// printArray(a)


// fucntion with unlimited no of arguments


function sumOfNumbers(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum;

}


let a= sumOfNumbers(1,2,3,4,5)
console.log(a);


