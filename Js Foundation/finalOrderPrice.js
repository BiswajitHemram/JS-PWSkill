const calculateTotalCost = (cart)=>{
    let totalCost = 0;
    cart.forEach(element => {
        totalCost += element.unitPrice * element.quantity;
    });
    return totalCost;
}

const customerCart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 20, quantity: 1 },
    { unitPrice: 5, quantity: 3 }
];

console.log(calculateTotalCost(customerCart));