// Função map, responsável por transformar os elementos de um array. Tem obrigatoriamente o mesmo tamanho do array original. Também possível chamar mais de um map.

const numbers = [1, 2, 3, 4, 5, 6];

const numbersV2 = numbers.map(function(el) {
    return el * 2;
})

// const numbersV2 = numbers.map(el => el*2); Arrow

console.log(numbers, numbersV2);

const studens = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
];

const getScore = el => el.score;

const result = studens.map(getScore); // usando apenas um map
const result2 = studens.map(getScore).map(Math.ceil); // Usando dois maps para arredondar as notas.
console.log(studens, result);
console.log(result2);