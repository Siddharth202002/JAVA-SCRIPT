let superHeores=["spiderMan","thor","superMan"];
let powers={
    spiderMan:"sling",
    thor:"hammer",
    superMan:"fly",

    display:function(){
        console.log(`power of spiderMan is ${this.spiderMan}`);
        

    }
}
// Prototyping 
Object.prototype.hey=function(){
    console.log("hellow siddharth");
    
}
Array.prototype.hellow=function(){
    console.log("hellow world");
    
}
superHeores.hey()
powers.hey()
superHeores.hellow()