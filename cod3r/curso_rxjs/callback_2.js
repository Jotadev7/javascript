const fs = require('fs'); // FileSystem par ler arquivo
const path = require('path'); // Path pra pegar o caminho do arquivo

const caminho = path.join(__dirname, 'dados.txt'); // Caminho do arquivo.

function exibirConteudo(err, conteudo) {
    console.log(conteudo.toString());
}

console.log('Inicio...');
fs.readFile(caminho, {}, exibirConteudo); // Pode suprimir o segundo parâmetro (excluir as {}).
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString())); //
console.log('Fim...'); // Notar que será exibido o ínico e o fim e só depois vai ler o arquivo acima. (Forma assíncrona, com callback)

// Forma síncrona, só irá exibir o próximo ao concluir o evento (no caso, a leitura do arquivo).
console.log('Início Sync...');
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log('Fim Sync.');