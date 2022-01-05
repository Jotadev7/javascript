// Diferente do map e do filter, primeiro parâmetro é um acumulador e o segundo parâmetro é o elemento atual. 

const numbers = [1, 2, 3, 4, 5, 6];

const sum = (total, el) => total + el;
const total = numbers.reduce((total, el) => total + el);
const total1 = numbers.reduce(sum);
console.log(total);
console.log(total1);

const media = (acc, el, i, array) => {
    if(i === array.length - 1) {
        return (acc + el) / array.length;
    } else {
        return acc + el;
    }
}

const result = numbers.reduce(media);
console.log(`A média de ${numbers[0]}, ${numbers[1]}, ${numbers[2]}, ${numbers[3]}, ${numbers[4]}, ${numbers[5]} é: ${result}.`);