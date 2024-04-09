function convertToINR(priceUSD) {
    return priceUSD * 80;
}

const inventory = {
    "apple": 2.50,
    "banana": 1.20,
    "orange": 3.00
};

const inrPrice = Object.fromEntries(Object.entries(inventory).map(([key,value])=> [key, convertToINR(value)]))
console.log(inrPrice);