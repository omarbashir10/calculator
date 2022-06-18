// Data

let fnumber = document.getElementById("firstnumber")
let snumber = document.getElementById("secondnumber")
let tnumber = document.getElementById("thirdnumber")
let more = document.getElementById("more")
let plus = document.getElementById("za2ed")
let mins = document.getElementById("na2es")
let fe = document.getElementById("darb")
let ala = document.getElementById("2sma")
let result = document.getElementById("result")
let refresh = document.getElementById("refresh")
let mood = document.getElementById("mood")
let card = document.getElementById("card")
let body = document.getElementById("body")
let none = document.getElementById("none")
let dark = document.getElementById("dark")

// Data
window.onload = function() {
    dark.style.display = 'none'
}
mood.onclick = function() {
    body.style.background = 'white'
    card.style.background = '#dcdba3'
    none.style.color = 'white'
    mood.style.background = '#333'
    mood.style.color = 'white'
    mood.style.display = 'none'
    dark.style.display = 'block'
}

dark.onclick = function() {
    body.style.background = '#333'
    card.style.background = '#222'
    mood.style.background = 'white'
    mood.style.color = 'black'
    mood.style.display = 'block'
    dark.style.display = 'none'
}

function gam3() {
    let gam3result = +fnumber.value + +snumber.value
    result.innerHTML = gam3result
}

function tar7() {
    let tar7result = +fnumber.value - +snumber.value 
    result.innerHTML = tar7result
}

function darb() {
    let darbresult = +fnumber.value * +snumber.value
    result.innerHTML = darbresult
}

function sma() {
    let smaresult = +fnumber.value / +snumber.value 
    result.innerHTML = smaresult
}
