const fs = require('fs'); // FileSystem par ler arquivo
const path = require('path'); // Path pra pegar o caminho do arquivo

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler');
    })
}

const caminho = path.join(__dirname, 'dados.txt'); // Caminho do arquivo.

lerArquivo(caminho).then(conteudo => console.log(conteudo));