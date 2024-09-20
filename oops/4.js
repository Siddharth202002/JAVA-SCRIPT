class product{
    #name;
    #price;

    constructor(n,p){
        this.#name=n
        this.#price=p
    }
    // when we declare function static it gives an type error they cant print the private memebrs

       display(){
        console.log("name is ",this.#name);
        console.log("price is ",this.#price);
        
    }


}

let p1=new product("iphone",10000)

p1.display()