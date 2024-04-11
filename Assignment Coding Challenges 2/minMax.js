function minMax(arr){
    return {max : Math.max(...arr), min : Math.min(...arr)}
}

const arr = [5,2,7,1,9];
console.log(minMax(arr));