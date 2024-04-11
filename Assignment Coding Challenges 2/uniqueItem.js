function uniqueItem(arr){
    const setItem = new Set(arr);
    return setItem;
}

const arr = [1,4,7,81,5,9,4,3,5,7,8,9,2,6,4]
const item = uniqueItem(arr);
console.log(item);