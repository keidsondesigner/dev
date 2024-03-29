function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

// é mais performatico ter um método fora da função construtora
Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * this.preco * (percentual / 100));
};

const produto1 = new Produto('camisa', 50);
console.log('Valor inicial 1', produto1);

//----> Setando um produto, no Objeto literal Produto;
const produto2 = {
  nome: 'Caneca',
  preco: 40
};
Object.setPrototypeOf(produto2, Produto.prototype)
//---->


produto1.desconto(10)
console.log('esconto()', produto1)
produto1.aumento(55)
console.log('aumento()', produto1)
console.log('-----------------')

console.log('Valor inicial 2', produto2);
produto2.desconto(10)
console.log('esconto()', produto2)
produto2.aumento(55)
console.log('aumento()', produto2)
console.log('-----------------')


// Object.create()
const produto3 = Object.create(Produto.prototype);
produto3.nome = 'Monitor'
produto3.preco = 1.295

console.log('produto 3', produto3);
produto3.aumento(15)
console.log('aumento', produto3);