let rentalCost=(noOfDays,typeOfCar)=>{
    if(typeOfCar==="Economy"){
        return noOfDays*4000
    }
    else if(typeOfCar==="MidSize"){
        return noOfDays*10000
    }
    else{
        return noOfDays*20000
    }
}


let noOfDays=10;
let carType="Economy"
console.log(rentalCost(noOfDays,carType));
