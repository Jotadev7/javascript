// Anonymous function

(function (a, b, c) { // Criando função anônima, sem nome.
    return a + b + c;
})

// Function expression

const x = 1;
const sum = function(a, b) { // Usando para atribuir o valor de uma função a variável.
    return a + b;
}

const result = sum(7, 59); // Chamando a função
console.log(result);

const anotherSum = sum;
console.log(anotherSum(5, 19)); // Usando outra constante para apontar para a função.