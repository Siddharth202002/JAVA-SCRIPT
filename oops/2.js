class product{
    
    constructor(n,p,w){
        this.name=n
        this.price=p
        this.warrenty=w
        return 10
        // return {age:10} when we return the non-primitive datatype it returns  that  datatype
        // when we return primitive datatype it not returns  that data type

    }


    display(){
        
        
        console.log("details of the product",this.name,this.price,this.warrenty);
        
    }
}

function product(){
    
}

let p1=new product("iphone14",100000,1)
console.log(p1);

