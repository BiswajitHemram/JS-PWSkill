function manipulateString(string,callbackfun){
    return callbackfun(string)
}

function logString(str){
    console.log(str.toUpperCase());
}

manipulateString("hello world", logString);