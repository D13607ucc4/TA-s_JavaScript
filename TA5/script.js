

function leapYears(año) {

    if ((año % 4 === 0) || (año % 100 === 0 && año % 400 === 0)){
        return console.log(true)
    } else {
        return console.log(false)
    }
   
}

leapYears(1900)