function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, tempo)
    })
}

/*
esperarPor(2000)
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'));
*/

function retornarValor() { // Resolve a promise só um tempo depois
    return new Promise(resolve => {
        setTimeout(() => resolve(10, 5000));
    })
}

async function retornarValorRapido() { // Resolve a promise na hora
    return 20;
}

// Transformando uma função síncrona em assíncrona, sem usar o método then.
async function executar() {
    let valor = await retornarValorRapido();

    await esperarPor(1500);
    console.log(`Async/Await ${valor}...`);

    await esperarPor(1500);
    console.log(`Async/Await ${valor + 1}...`);

    await esperarPor(1500);
    console.log(`Async/Await ${valor + 2}...`);

    return valor + 3;
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade();