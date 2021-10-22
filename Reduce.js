function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log({ prev }); // Mostra o primeiro valor que é "1"
        console.log({ current }); // Mostra o segundo valor que é "2"
        return prev + current;
    }, 0) // Para iniciar o calculo a partir do "0"
}

const arr = [1, 2]; // Soma 1 + 2 = "3"

console.log(somaNumeros(arr));


/* ------------------------ */
const lista = [ // No caso a baixo é feito o calculo diminuindo o saldo de 100 a partir dos itens da lista
    { // Lista
        name: 'Sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100; // Saldo

function calculaSaldo(saldoDisponivel, lista) { // função calcula saldo
    return lista.reduce(function(prev, current, index) {
        console.log("rodada", index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco; // retorna o saldo disponível após intens da lista
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));