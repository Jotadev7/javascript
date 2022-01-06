const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
];

const getNome = item => item.nome;
const qtdeMaiorQueZero = item => item.qtde > 1;

const itensValidos = carrinho.filter(qtdeMaiorQueZero);

console.log(itensValidos);

const nomesItensValidos = carrinho.filter(qtdeMaiorQueZero).map(getNome);

console.log(nomesItensValidos);

// Criando próprio filter
Array.prototype.meuFilter = function (fn) {
    const novo = [];
    for(let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)) {
            novo.push(this[i]);
        }
    }
    return novo;
}

const nomesItensValidos2 = carrinho.meuFilter(qtdeMaiorQueZero).map(getNome);

console.log(nomesItensValidos2);