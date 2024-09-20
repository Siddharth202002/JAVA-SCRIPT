let name="shrishty"
let vowel="aeiou"
let count=0;
for(i in name){
    let char=name[i]
    for( j in vowel){
        if(char===vowel[j]){
            count ++

        }
    }
}
console.log(count);
