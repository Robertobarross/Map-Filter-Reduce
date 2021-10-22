const maca = {
    value: 2, // 1 x 2 = 2 [2 x 2 = 4]
}

const laranja = {
    value: 3, // 1 x 3 = 3 [2 x 3 = 6]
}

const nums = [1, 2]; // Multiplica os valores primeiro por 1, e depois por 2

function mapComThis(arr, thisArg) { // Função Map com this
    return arr.map(function(item){
       return item * this.value; // Retornar com o resultado multiplicado *
    }, thisArg);
}

console.log('this -> maçã', mapComThis(nums, maca)); //  Mostrando resultado no console

console.log('this -> laranja', mapComThis(nums, laranja)); //  Mostrando resultado no console