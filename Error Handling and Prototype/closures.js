function numberChecker(arr){
    function secondChecker(){
       return arr.includes(...arguments)
    }
    return secondChecker;
}

const arr = [1,2,3,4,5]
const checkNum = numberChecker(arr);

console.log(checkNum(2));