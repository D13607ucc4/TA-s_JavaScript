
function getOdds(nums){
    // let impares = []
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] % 2 !== 0) {
    //         impares.push(i)
    //     }
    // }

    let impares = nums.filter(num => (num % 2 !== 0))
    return impares
}

console.log('Los numero impares son ' + getOdds([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))