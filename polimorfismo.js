// Super Class ou Class Pai, Mãe
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log('Saldo insuficiente: ' + this.saldo)
        return; 
    }
    this.saldo = this.saldo - valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo = this.saldo + valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Agencia: ${this.agencia} Conta: ${this.conta} Saldo: ${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta(2324, 35835, 250.55)
console.log(conta1);

conta1.depositar(30);
conta1.sacar(230);



/// POLIMORFISMO ---------------


function ContaCorrente(agencia, conta, saldo, limite) {
    // erdando propriedades e métodos da Super Class 'Conta'
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
//Linkando o 'this' da Class ContaCorrente 
//com o 'this' da Super Class 'Conta'
ContaCorrente.prototype = Object.create(Conta.prototype);
//Linkando Constructor do prototype da Super Class 'Conta', 
//com o prototype  da Class 'ContaCorrente', 
//para ter acesso aos métodos da Super Class 'Conta'.
ContaCorrente.prototype.constructor = ContaCorrente;

//Sobreescrevendo um método da Super Class 'Conta'
ContaCorrente.prototype.sacar =  function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo = this.saldo - valor;
    this.verSaldo();
};

const contaCorrente = new ContaCorrente(243535, 5777, 0, 100); // limite de R$ 100 na conta; 
console.log('ContaCorrente', contaCorrente);
contaCorrente.sacar(90);
contaCorrente.sacar(10);
contaCorrente.sacar(100);

