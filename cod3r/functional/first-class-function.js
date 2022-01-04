/*Uma linguagem de programação é tida como First-class function quando suas funções são tratadas como qualquer outra variável.*/

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = (x, y) => x * y;

const divide = (x, y) => x / y;

console.log(add(10,20));
console.log(subtract(5, 25));
console.log(multiply(2, 4));
console.log(divide(6, 3));