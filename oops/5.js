class complexNumbers{
    #real;
    #imaginary;
    constructor(r,i){
        this.#real=r
        this.#imaginary=i
    }

    display(){
       
        console.log(`${this.#real} + i ${this.#imaginary}`);
        
    }

    get real(){
        return this.#real

    }

    get imaginary(){
        return this.#imaginary
    }


    addComplex(c){
        this.#real+=c.real
        this.#imaginary+=c.imaginary
       
    }


    }


let c1=new complexNumbers(2,3)
c1.display()
let c2=new complexNumbers(3,4)
c2.display()
c1.addComplex(c2)
c1.display()