let obj={
    x:10,
   
    abc(){
        y={
            x:200,
            gun (){
                console.log(this.x);
                
            }
        }
        y.gun()
        
        

    }
   

}

obj.abc()