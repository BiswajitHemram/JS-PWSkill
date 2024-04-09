const customer = {
    name: "Ajay",
    balance: 1000
};

const deposit = (amount) => {
    if (amount > 0) {
        customer.balance += amount;
        console.log(`Deposit of ${amount} successfully processed. New balance: ${customer.balance}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
};

const withdraw = (amount) => {
    if (amount > 0 && amount <= customer.balance) {
        customer.balance -= amount;
        console.log(`Withdrawal of ${amount} successfully processed. New balance: ${customer.balance}`);
    } else if (amount > customer.balance) {
        console.log("Insufficient funds.");
    } else {
        console.log("Withdrawal amount must be positive.");
    }
};


console.log("Initial balance:", customer.balance);
deposit(500); 
withdraw(200); 
withdraw(1000); 
withdraw(-100); 
console.log(customer.balance);