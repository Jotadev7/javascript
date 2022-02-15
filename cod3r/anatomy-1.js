// Function declaration

function sayHello() { // Declarando a função. (Sem parâmetros e sem retorno)
    console.log('Hello!');
}

sayHello(); // Chamando a função.

function sayHelloTo(name){ // Declarando a função. (Com parâmetro string)
    console.log('Hello ' + name);
//  console.log(`Hello ${name}`); Também pode ser realizado com interpolação usando as crases.
}

sayHelloTo(); // Vai exibir valor undefined.
sayHelloTo('João'); // Chamando função e passando valor no parâmetro.

function returnHi() { // Declarando a função. (Com retorno)
    return 'Hi!';
}

returnHi(); // Não exibe nada, apenas retorna.
console.log(returnHi()); // Exibindo o retorno.
const greeting = returnHi(); // Variável para armazenar o retorno.
console.log(greeting); // Exibindo a variável que armazenou o retorno.

function returnHiTo(name) { // Declarando a função. (Com parâmetro e retorno)
    return `Hi, ${name}!`;
}

console.log(returnHiTo('John'));

console.log('teste');