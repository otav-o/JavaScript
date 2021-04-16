'use strict';

class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = qtdePatas;
    }

    movimentar() { }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4);
        this.morde = morde;
    }

    latir() {
        console.log('au au');
    }
}

const pug = new Cachorro(false);
console.log(pug);

class Pessoa {
    constructor(name) {
        this.name = name;
    }
}

class PessoaFisica extends Pessoa {
    constructor(name, cpf) {
        super(name);
        this.cpf = cpf;
    }
}