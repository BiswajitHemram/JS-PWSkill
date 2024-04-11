function nestedObject(obj){
    const {name, address:{street}} = obj;
    return {name, street}
}

const person = {
    name : "biswajit",
    age : 20,
    address : {
        street : "lsdjflajfla",
        city : "sector",
        state : "up"
    },
};

console.log(nestedObject(person));