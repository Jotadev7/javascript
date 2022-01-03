// Parâmetros

function logParams(a, b, c) { // Declarando uma função com 3 parâmetros.
    console.log(a, b, c);
}

logParams(1, 2, 3, 4, 5); // Ao atribuir mais parâmetros a função considera apenas os que ela tem.
logParams(1, 2, 3);
logParams(1, 2); // Ao atribuir menos, os outros valores vão assumindo o valor undefined.
logParams(1); // 1, undefined, undefined.
logParams(); // undefined, undefined, undefined.

function defaultParams(a = 3, b = 1, c = 0) { // Atribuindo valores padrões aos parâmetros.
    console.log(a, b, c);
}

defaultParams(7, 8, 9);
defaultParams(2, 3) // 2, 3, 0 (valor padrão de C)
defaultParams(6) // 6, 1, 0 (valores padrões de B e C)
defaultParams(); // 3, 1, 0 (todos valores padrões)

// spread/rest
function logNums(...nums) { // Usando anotação para receber uma quantidade variável de parâmetros.
    console.log(Array.isArray(nums));
    for(let n of nums) {
        console.log(n);
    }
}
console.log('Exibindo o array');
logNums(1, 2, 3, 4, 5);

function logNums1(...nums) { 
    console.log(nums);
}
console.log('Exibindo novamente o array');
logNums1(1, 2, 3, 4, 5);

function sumAll(...nums) { // Função para somar todos os parâmetros
    let total = 0;
    for(let n of nums) {
        total += n;
    }
    return total;
}

console.log('Somando todos os números de um array: ' + sumAll(1, 2, 3, 4, 5));