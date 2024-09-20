
let finalOrderPrice=(cart)=>{
    let sum=0
    cart.map((ele)=>{
        sum+=ele.unitPrice*ele.Quantity
    })

    return sum
    
}



let cart=[
    {
        item:1,
        unitPrice:10,
        Quantity:5
    },
    {
        item:2,
        unitPrice:20,
        Quantity:10
    },
    {
        item:3,
        unitPrice:30,
        Quantity:15
    }

]


console.log( finalOrderPrice(cart));

