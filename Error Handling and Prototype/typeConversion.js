function converToNumber(str){
    try{
        let num = +str;
        if(isNaN(num)){
            throw new Error("Invalid Number")
        }
        return num;
    } catch (e){
        return e.message;
    }
}
console.log(converToNumber("adfa"));
console.log(converToNumber("123"))