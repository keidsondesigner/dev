function ValidaCPF(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: () => {
            // regex com replace(), tudo que não for número é apagado;
            return cpf.replace(/\D+/g, '');
        },
    });
}

ValidaCPF.prototype.validar = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;

    console.log('this.cpfLimpo', this.cpfLimpo)
    const digitos = this.cpfLimpo.slice(0, -2);
    console.log('this.cpfLimpo.slice()', this.cpfLimpo)

    // Método que transformando minha string CPF em Array;
    const digito1 = this.criarDigito(digitos);
    return true;
}

ValidaCPF.prototype.criarDigito = function(digitosDoCFP) {
    // Transformando minha string CPF em Array;
    const cpfArray = Array.from(digitosDoCFP);
    console.log(cpfArray);
}

const inputCpf = new ValidaCPF('705.484.450-52')
console.log(inputCpf.validar())


