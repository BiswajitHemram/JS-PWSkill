const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;

    const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100;

    return roundedDiscountPercentage;
};


const originalPrice = 10000;
const discountedPrice = 7500;

console.log(calculateDiscountPercentage(originalPrice, discountedPrice));
