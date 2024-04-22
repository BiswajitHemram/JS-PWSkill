function arraytest(arr){
    return arr.map((item)=> item*2)
}

let arr = [2,3,4,5]
let functionCall = arraytest(arr);
console.log("orginal arr: ",arr);
console.log("function return arr: ",functionCall);