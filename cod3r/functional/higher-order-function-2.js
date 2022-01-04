/*Funções podem operar dentro(usando) de outras funções, podem pegar qualquer argumento de outra função e também podem retornar uma função a partir de outra função.*/

//(Exemplo de uma função retornando uma função)

// curring - muito usado na programação funcional.

function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax);
    }
}

const nycFinalPrice = finalPrice(0.82); // Testando o benefício de retornar uma função.

console.log(finalPrice(0.25)(0.66)); // Chamando normal e passando os parâmetros.
console.log(nycFinalPrice(0.12)); // Chamando a função de forma mais simples, com imposto já informado.
console.log(nycFinalPrice(0.15));