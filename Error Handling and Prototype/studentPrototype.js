function Student(name){
    this.name = name;
}

Student.prototype.printDetails = function(){
    return `Hello, my name is ${this.name}`
}
const student = new Student("Mithun");

console.log(student.printDetails());