// Produto -> aumento(), desconto()
// Camiseta = Cor
// Caneta = material

// Um produto genérico
function Produto(nome, preco) {
	this.nome = nome;
	this.preco = preco;
}

// Métodos desponíveis do Produto
Produto.prototype.aumento = function(valor) {
	this.preco += valor;
}

Produto.prototype.desconto = function(valor) {
	this.preco -= valor;
}

const produto = new Produto('Produto Genérico', 78.85);
console.log(produto);

// Herança, erdo tudo de Produto em Camiseta
// e posso adicono outra propriedades ou métodos
// quando precisar
// ----->>>>>
function Camiseta(nome, valor, cor) {
	// o "this de Camiseta" vai ser o "this de Produto"
	Produto.call(this, nome, valor);

	// adicionando uma nova propriedade, onde o Produto generico não tem;
	this.cor = cor;
}

// Linkando Constructor do prototype de Produto, com o prototype Camiseta;
// Para ter acesso aos métodos;
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

//Sobreescrevendo um método que existe na Class genérica
Camiseta.prototype.aumento = function(valor) {
	this.preco = this.preco + (this.preco * (valor / 100))
}

const camiseta = new Camiseta('Regata', 35.55, 'Preta');
console.log(camiseta)



// Henrança, herdando propriedades e métodos da Class Produto
// na Class Caneca
function Caneca(nome, valor, material, estoque){
	Produto.call(this, nome, valor);
	this.material = material;
	// Getters & Setters
	Object.defineProperty(this, 'estoque', {
		enumerable: true, // não pode apagar
		configurable: false, 
		get: function(){
			return estoque;
		},
		set: function(value){
			if(typeof value !== 'number') return
			estoque = value;
		}
	});
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produtoCaneca = new Caneca('Caneca personalziada', 145.95, 'Porcelana', 5);
console.log(produtoCaneca);
produtoCaneca.estoque = 100 // passadno um novo estoque;
console.log('novo estoque', produtoCaneca.estoque);

