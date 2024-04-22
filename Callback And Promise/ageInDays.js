function ageInDays(person,callbackDisplay){
    const fullname = `${person.first} ${person.last}`;
    const ageInDays = Math.ceil(person.age * 365.24); // to calculate the leap year also we add .24
    return callbackDisplay(fullname,ageInDays);
}

function message(name,age){
    console.log(`The person's full name is ${name} and their age in days is ${age}.`);
}

const person = {
    first : "Mithun",
    last : "S",
    age : 24
}

const userDetails = ageInDays(person, message)
