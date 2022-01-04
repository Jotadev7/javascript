/*Funções podem operar dentro(usando) de outras funções, podem pegar qualquer argumento de outra função e também podem retornar uma função a partir de outra função.*/

function run(fn) {
    return fn();
}

function sayHello() {
    console.log('Hello!');
}

run(sayHello); // Se passar a função irá dar erro, devemos passar apenas a referência da função.

run(function() { // Passando uma função anônima como parâmetro para outra função.
    console.log('run!!!');
});

const result = run(Math.random);
console.log(result);