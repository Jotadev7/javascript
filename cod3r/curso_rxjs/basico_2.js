// Passando outra função como parâmetro para uma função.

function bomDia() {
    console.log('Bom dia!');
}

const boaTarde = function() {
    console.log('Boa tarde!');
}

function executarQualquerCoisa(fn) {
    if(typeof fn === 'function') {
        fn();
    }
}

executarQualquerCoisa(3); // Não irá imprimir pois 3 não é uma função.
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// Retornar uma função a partir de outra função.

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp);
    }
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

const resultadoPot = potencia(3)(4); // Como há uma função retornando outra, é assim que passamos os parâmetros, sem vírgula.
console.log(resultadoPot);