function correctBug(cart){
    const correctCart = [];
    for(let i=0; i<cart.length; i++){
        correctCart.push(cart[i]*2);
    }
    return correctCart;
}

const cart = [1,2,3,4,5];
const correctCart = correctBug(cart);
console.log(correctCart);