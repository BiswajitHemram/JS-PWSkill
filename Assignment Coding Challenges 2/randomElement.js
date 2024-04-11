function randomElement(arr){
    const [a,b,...c] = arr;
    const last = c.pop()
    return [a,b,last]
}

const arr = [1,2,3,4,5];
console.log(randomElement(arr));