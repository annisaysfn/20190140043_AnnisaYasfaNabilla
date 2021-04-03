//Alert dari app.js
alert('Selamat Datang')

//Console.log
console.log('Test')

//Tanggal
Date()
let tanggal = new Date()

//DOM HTML
document.getElementById('Tanggal').innerHTML = tanggal

//DOM CSS
document.getElementById('Judul').style.textAlign = 'center'
document.getElementById('perkenalan').style.textAlign = 'center'
document.getElementById('perkenalan').style.fontSize = '16pt'
document.getElementById('perkenalan').style.backgroundColor = 'burlywood'
document.getElementById('Today').style.textAlign = 'center'
document.getElementById('Tanggal').style.textAlign = 'center'
document.getElementById('Tanggal').style.color = 'white'
document.getElementById('Tanggal').style.backgroundColor = 'black'

//Function
function showDiv(perkenalan){
    document.getElementById(perkenalan).style.display = 'block';
    }