let a = 1;
console.log(a);

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3);
}) // Promessa que irá dar um dado no futuro.

console.log(p); // Recebe a promessa
p.then(function(valor) { // Método para chamar a função quando a promessa for cumprida.
    console.log(valor);
})

// Vantagem do promise, pode usar mais de um then, e o resultado de um método then é passado para o próximo método then.
let q = new Promise(function(cumpriraPromessa) {
    cumpriraPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

.then(valor => valor[0])
.then(primeiro => primeiro[0])
.then(letra => console.log(letra))