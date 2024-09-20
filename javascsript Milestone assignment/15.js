let originalPrice=1000
let discountPrice=558


let percentage=(originalPrice,discountPrice)=>{
    let discount=originalPrice-discountPrice
    let percent=(discount/1000)*100
    return percent.toFixed(2)
}

console.log(percentage(originalPrice,discountPrice)+'%');

