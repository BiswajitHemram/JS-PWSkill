function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return; 
    }

    console.log("Result:", result);
}


calculator(5, 3, '+'); 
calculator(10, 2, '-'); 
calculator(4, 5, '*'); 
calculator(10, 2, '/'); 
calculator(5, 3, '%'); 
