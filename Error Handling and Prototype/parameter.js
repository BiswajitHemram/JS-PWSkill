function getPerson(obj) {
    try{
        if(typeof obj !== "object" || obj === null || !("name" in obj) || !("age" in obj)){
            throw new Error("Invalid parameter type");
        }
        return `Name: ${obj.name}, Age: ${obj.age}`

    } catch (e){
        return e.message;
    }
    
}

console.log(getPerson({ name: "check", age: 20 }));
console.log(getPerson({name: "check"}));
console.log(getPerson(["name","check"]));
