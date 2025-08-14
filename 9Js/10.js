// let black = document.querySelector('#black')
// let green = document.querySelector('#green')
// let pink = document.querySelector('#pink')
// let color = document.querySelector('#color')

// black.addEventListener('click',function(){
//     color.style.backgroundColor='black'
// })
// green.addEventListener('click',function(){
//     color.style.backgroundColor='green'
// })
// pink.addEventListener('click',function(){
//     color.style.backgroundColor='pink'
// })

let color = document.querySelector('#color');
let all_color = ['red', 'pink' , ' green']
let index=0
setInterval(()=>{
    console.log(index)
    index=(index+1)% all_color.length
    color.style.backgroundColor = all_color[index]
}, 1000)