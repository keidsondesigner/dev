//Factory Function
function pessoa1(nome, sobrenome) {
    const pessoa1Prototype = {
        falar() {
            console.log(`${this.nome} está falando`)
        },
        comer() {
            console.log(`${this.nome} está comendo`)
        },
        beber() {
            console.log(`${this.nome} está bebendo`)
        },
    };

    return Object.create(pessoa1Prototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
    });
}

const p1 = pessoa1('Luiz', 'Otávio');
console.log(p1.nome);
console.log(p1.sobrenome);
p1.falar();
p1.comer();
p1.beber();


console.log('<<<<<<<---------->>>>>>')


// Desacoplando métodos com Composição/Composition
const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}
const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const pessoaPrototype = Object.assign({}, falar, comer, beber);
//const pessoaPrototype = {...falar, ...comer, ...beber};

function pessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
    });
}

const p2 = pessoa('keidson', 'Roby');
console.log(p2.nome);
console.log(p2.sobrenome);
p2.falar();
p2.comer();
p2.beber();