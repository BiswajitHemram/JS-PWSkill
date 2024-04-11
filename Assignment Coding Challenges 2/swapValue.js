function swapValue(x,y){
    [x,y] = [y,x]
    return [x,y]
}

let x = 5;
let y = 10;
console.log(`Before swap value:\nx = ${x} and y = ${y}`);

[x,y] = swapValue(x,y);
console.log(`After swap value:\nx = ${x} and y = ${y}`);