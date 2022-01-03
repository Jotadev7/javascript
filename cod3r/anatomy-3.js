// Usando ainda function expression

const increment1 = function(n) {
    return n + 1;
}

// Arrow function sempre é função anônima!

const increment2 = (n) => { // Usando arrow function, não precisamos usar o nome.
    return n + 1;
}

const increment3 = n => { // Quando temos apenas 1 parâmetro na função arrow podemos tirar os parênteses(). 
    return n + 1;
}

const increment4 = n => n + 1; // Usando essa sintaxe tudo que está depois do arrow será retornado automaticamente. (Não necessário usar o return)

console.log(increment1(1));
console.log(increment2(5));
console.log(increment3(25));
console.log(increment4(99));

const num = (a, b) => a + b; // Arrow function com mais de um parâmetro precisamos usar os parênteses().
console.log(num(3, 8));