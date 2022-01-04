// Função filter, responsável transformar os elementos de um array. Porém não tem obrigatoriamente o mesmo tamanho do original como na função map. Essa função permite criar um novo array até mesmo sem nenhum elemento.

const numbers = [1, 2, 3, 4, 5, 6];

const greaterThanZero = el => el > 0;
const greaterThanTen = el => el > 10;
const even = el => el % 2 === 0;

console.log(numbers.filter(el => el > 0)); // Array do mesmo tamanho do original / Usando a condição.
console.log(numbers.filter(greaterThanZero)); // Chamando direto a função.
console.log(numbers.filter(greaterThanTen)); // Array vazio.
console.log(numbers.filter(even)); // Array menor que o original.


const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
];

const greatStudent = students => students.score >= 9;

console.log(students.filter(greatStudent));