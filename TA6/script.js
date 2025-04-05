
function convertToCelsius(temp){
    let formula = ((temp - 32) * 5/9)
    return Math.floor(formula)
}

function convertToFahrenheit(temp){
    let formula = ((temp * 9/5) + 32)
    return Math.floor(formula)
}



console.log('32 grados fahrenheit son ' + convertToCelsius(32) + ' grados celsius')
console.log('0 grados celsius son ' + convertToFahrenheit(0) + ' grados fahrenheit')