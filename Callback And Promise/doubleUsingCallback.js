function arrayPass(arr,callbackArray){
    return callbackArray(arr);
}

function doubleArray(arr){
    return arr.map((item)=> item*2);
}

const arr = [2,5,8,9];
let newArray = arrayPass(arr,doubleArray);
console.log("Orginial Array: ",arr);
console.log("Function retturn Array with double of orginial: ",newArray);
