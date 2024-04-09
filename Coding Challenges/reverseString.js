function reverse(input){
    return input.split("").reverse().join("");
}

let input = "Hello World";


setTimeout(()=>{
    const reverseString = reverse(input);
    console.log(reverseString);
},2000)