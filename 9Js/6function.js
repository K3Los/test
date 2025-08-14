const data=()=>{
    let id=101
    let name = 'Nika'
    let gender = "Male"

    console.log('ID: ', id)
    console.log('Name: ', name)
    console.log('Gender: ',gender)
}
data()
const Class=( id , name , gender )=>{
    console.log('ID: ', id)
    console.log('Name: ', name)
    console.log('Gender: ',gender)
}
Class(101, 'Los' ,"Male")

function grade(score1, score2, score3){
    let total = score1+score2+score3
    return total
}
console.log(grade(100, 40,30)/3)    