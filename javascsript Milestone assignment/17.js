let user1={
    name:"siddharth",
    balance:10000,
    maintain:function (deposit,withdrawal){
        this.balance=this.balance+deposit
        this.balance=this.balance-withdrawal
        console.log(this.balance);
        // return this.balance
        
        
    }
}

console.log((user1.maintain(1000,5000)));
//  console.log(user1.maintain());
   

