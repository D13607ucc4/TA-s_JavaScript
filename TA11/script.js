
function  duplicates(nums){
    const diccionario = {};
    let cantidadDeDuplicados = 0;

    nums.forEach((num) => {
        if (diccionario[num]) {
        diccionario[num]++;
        } else {
        diccionario[num] = 1;
        }
    });

    for (let numero in diccionario) {
        if (diccionario[numero] > 1) {
        cantidadDeDuplicados++;
        }
    }

    return cantidadDeDuplicados;
}

console.log(duplicates([1, 2, 2, 3, 4, 4, 4, 5]))