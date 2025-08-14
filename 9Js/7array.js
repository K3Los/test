let data = ['RUPP', 100, 100.8, true ,'coconut' , 'apple']
for(var i=0; i<data.length ; i++){
    console.log(i+1, data [i])
    text += `<h1>${i} . ${data[i]}</h1>`
}
document.querySelector('#text').innerHTML = text