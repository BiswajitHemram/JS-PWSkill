function finalRentCost(carType, daysRent){
    let perDayRent;
    switch(carType.toLowerCase()){
        case "economy":
            perDayRent = 4000;
            break
        case "midsize":
            perDayRent = 10000;
            break;
        case "luxury":
            perDayRent = 20000;
            break;
        default:
            return "Invaild car type";
    }
    return totalRent = perDayRent * daysRent;
}

console.log(finalRentCost("Economy", 5));