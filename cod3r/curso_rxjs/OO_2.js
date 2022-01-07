// Exemplo anterior, função construtora.

class Produto {
    constructor(nome, preco, desc = 0.5) {
        this._nome = nome;
        this.preco = preco;
        this.desc = desc;
    }

    get nome() {
        return `Produto: ${this._nome}.`;
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase();
    }

    get preco() {
        return this._preco;
    }

    set preco(novoPreco) {
        if(novoPreco > 0) {
            this._preco = novoPreco;
        }
    }

    get precoFinal() { // Get transforma a função em um atributo.
        return this.preco * (1 - this.desc);
    }
}

const p1 = new Produto('Caneta', 12.98);
p1.nome = 'caneta';
p1.preco = 10;
console.log(p1.nome, p1.preco);

const p2 = new Produto('Geladeira', 2346.57, 0.8);
console.log(p2.preco);
console.log(p2.precoFinal); // Não usamos () para chamar o precoFinal pois ele tem o get, que o faz virar um atributo.