function printNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        if (number % 3 === 0 && number % 2 !== 0) {
            console.log(number);
        }
    }
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printNumbers(numbersArray);
