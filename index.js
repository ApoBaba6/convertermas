/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let meterEl = document.getElementById("meter")
let literEl = document.getElementById("liter")
let kgEl = document.getElementById("kg")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    meterEl.textContent = `${baseValue} meters = ${baseValue * meterToFeet} feet`   
    literEl.textContent = `${baseValue} liters = ${baseValue * literToGallon} gallon`
    kgEl.textContent = `${baseValue} kilo = ${baseValue * kiloToPound} pound`  
         
})
