// let btn = document.querySelector('#btn')

// function show(){
//     for(var i=0; i<100; i++){
//         document.querySelector('#text').textContent += i+ '.Hello js'
//     }
// }

// btn.addEventListener('click', function(){
//     show()
//     show()
//     show()
//     show()
//     alert("Hello")
// })


let btn = document.querySelector('#btn')
let data = [
    "John", "Michael", "David", "James", "Robert", "William", "Daniel", "Joseph",
    "Thomas", "Charles", "Christopher", "Matthew", "Anthony", "Mark", "Steven",
    "Andrew", "Joshua", "Kevin", "Brian", "Edward"
]

btn.addEventListener('click', function () {
    data.map((item, index) => {
        document.querySelector('#text').innerHTMl += `<h1>${index + 1}. ${item}</h1>`
    })
})