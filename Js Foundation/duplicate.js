function removeDuplicates(cart) {
    const uniqueItems = new Set(cart);

    const uniqueCart = Array.from(uniqueItems);

    return uniqueCart;
}

const customerCartWithDuplicates = ['item1', 'item2', 'item1', 'item3', 'item2'];
const newCartWithoutDuplicates = removeDuplicates(customerCartWithDuplicates);
console.log(newCartWithoutDuplicates);
