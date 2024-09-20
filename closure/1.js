// closures and lexical scoping

function outer(){
    let str="outer function"
    function inner(){
        console.log(str);
        let str1="inner functions"
        function inner1(){
            console.log(str1,str);
            

        }
        inner1()      
    }
    inner()
    

}
outer()