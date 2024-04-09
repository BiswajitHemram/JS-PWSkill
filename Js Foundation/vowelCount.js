function vowel(string){
    string = string.toLowerCase();
    let count = 0
    for(let i=0; i<string.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
            count++; 
        }
    }
    return count > 0 ? count : "no vowel";
}

console.log(vowel("happy"));
console.log(vowel("love"));
