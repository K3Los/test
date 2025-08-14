var name = "Los"
var gender = "Male"
var Khmer = 90.87
var English = 60.70
var Math = 50.00

var total = Math + Khmer + English
var average = total / 3

console.log(`Name    : ${name}`)
console.log(`Gender  : ${gender}`)
console.log(`Khmer   : ${Khmer}`)
console.log(`English : ${English}`)
console.log(`Math    : ${Math}`)
console.log(`Total   : ${total}`)
console.log(`Average : ${average}`)  


if (average >= 90 && average <= 100) {
    console.log("Grade   : Grade A")
} else if (average >= 80 && average <= 90) {
    console.log("Grade   : Grade B")
} else if (average >= 70 && average <= 80) {
    console.log("Grade   : Grade C")
} else if (average >= 60 && average <= 70) {
    console.log("Grade   : Grade D")
} else if (average < 60) {
    console.log(" Failed the exam.")
} else {
    console.log(" Check Score again.")
}



