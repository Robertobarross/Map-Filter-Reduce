function filterPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    //return item % 2 === 0; // Filtra apenas números pares
    return item % 2 !== 0; // Filtra apenas números impares
}

const meuFilter = [1, 23, 55, 67, 2, 4];

console.log(filterPares(meuFilter));