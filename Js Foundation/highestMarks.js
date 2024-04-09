const student = [82,45,96,53,45];
let highestMark = Number.MIN_VALUE;
for (let index = 0; index < student.length; index++) {
   if(student[index] > highestMark)
        highestMark = student[index];
}
console.log(highestMark);