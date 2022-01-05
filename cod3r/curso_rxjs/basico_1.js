// declaração de função

function bomDia() { // Declarando a função.
    console.log('Bom dia!');
}

bomDia(); // Chamando a função.

// expressão de função

const boaTarde = function() { // Função anônima.
    console.log('Boa tarde!');
}

boaTarde(); // Para chamar a função chamamos a constante que recebe a função anônima.

// flexibilidade de parâmetros.

let x = boaTarde(); // Vai dar valor undefined

function somar(a, b, c = 0) {
    return a + b + c;
}

let resultado = somar(3, 4, 10); 
console.log(resultado);

resultado = somar(5, 5, 10, 8, 12); // Considera apenas os três primeiros pois possui apenas 3 parâmetros.
console.log(resultado);

resultado = somar(3); // O 2° valor será undefined, e a soma de 3 com undefined + 0 (valor padrão de c) retornará o NaN.
console.log(resultado);