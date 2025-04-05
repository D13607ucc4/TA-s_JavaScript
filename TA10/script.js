
function getSum(nums) {
    let suma = 0
    let sumados = nums.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        suma
    )

    return sumados
}

console.log('La suma de todos los numero del 1 al 10 es: ' + getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))