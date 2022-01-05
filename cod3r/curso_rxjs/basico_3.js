// Arrow function: () => console.log('Feliz Natal!);

const felizNatal = () => console.log('Feliz Natal!');
felizNatal();

const saudacao = (nome) => "Fala " + nome + "!!!";
console.log(saudacao('João'));

const somar = (...numeros) => {
    let total = 0;
    for(let n of numeros) {
        total += n;
    }
    return total;
}

console.log(somar(1, 2, 3, 4, 5, 6));

const potencia = base => exp => Math.pow(base, exp); // Uma função arrow dentro da outra.
console.log(potencia(5)(2));

// this
Array.prototype.log = function() {
    console.log(this); // Usando this no JS - Pode ser usado na função tradicional, mas não na arrow function.
}

const nums = [1, 2, 3];
nums.log();