// Anonymous function

// ???(1,2,3); Como invocar uma função anônima que não possui nome?

// IIFE - Imediately Invoked Function Expression (Função Expressa Imediatamente Invocável)
(function(a, b, c) {
    let x = 3; // Escopo do corpo da função
    console.log(`Result: ${a + b + c}.`);
    console.log(x);
})(1,2,3); // Usa a chamada logo após a função.

(function(a, b, c) {
    let x = 300; // Atribuindo outra variável x que não interfere na primeira.
    console.log(`Result: ${a + b + c}.`);
    console.log(x);
})(1,2,3); // Usa a chamada logo após a função.

(() => { // Função arrow imediatamente invocada.
    console.log('Arrow #01');   
})();

(() => console.log('Arrow #02'))(); // Função arrow com 1 linha de código.