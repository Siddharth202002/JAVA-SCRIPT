// function of a prime no
// x is an paramenter
function prime(x){
    flag =true;

    for(let i=2;i<x/2;i++){
        if(x%i==0){
            flag=false;
            break
            
        }
    }

    return flag;
}

let b=25;
// b is an argument
if(prime(b)){
    console.log("it is a prime no");
    

}
else{
    console.log("not prime");
    
}