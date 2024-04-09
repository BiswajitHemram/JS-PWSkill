function calculateBill(costPerDish, numberOfPerson){
    let totalBill = costPerDish.reduce((pre, curr)=> pre + curr, 0);
    let billPerPerson = totalBill / numberOfPerson;
    return {
        totalBill,
        billPerPerson
    };
}

let costPerDish = [25,51,15,45,62];
let numberOfPerson = 4;
const billDetail = calculateBill(costPerDish, numberOfPerson);
console.log(billDetail);