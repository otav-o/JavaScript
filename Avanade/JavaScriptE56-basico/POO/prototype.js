'use strict';
const meuTexto = 'Testar prototype';
console.log(meuTexto.split('')) // de onde vem esse split?

const meuTexto1 = String('Testar prototype');
console.log(meuTexto1.__proto__.split);

// construtor String (tem um prototype atrelado a ela). Há a referência ao __proto__

console.log(meuTexto.__proto__.split === String.prototype.split); // true
console.log(meuTexto.constructor === String); // true

// __proto__ -> prototype -> constructor
// meuTexto.constructor -> String
// meuTexto.__proto__ -> String.prototype

function Animal() {
    this.qtdePatas = 4;
}

console.log(Animal.constructor); // é o function
// f Animal.constructor -> f Function -> Function.prototype.constructor -> Object -> Object.prototype = null;

const cachorro = new Animal();
console.log(cachorro.qtdePatas);

console.log(cachorro.__proto__ === Animal.prototype); // true
console.log(Animal.__proto__ === Function.prototype); // true

console.log(cachorro instanceof Animal); // true
console.log(cachorro instanceof Function); // false

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
    Animal.call(this, 4); // passa o objeto cachorro (this)
    this.morde = morde;
}

const pug = new Cachorro(false)
console.log(pug); // Cachorro { qtdePatas: 4, morde: false }

// new: cria um novo objeto, herdando o prototype da função. This é vinculado ao objeto
// Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return'. Senão, será retornado o objeto criado

function Pessoa(name) {
    this.name = name;
}

const p = new Pessoa('Otávio');
console.log(p);

function Pessoa2(name) {
    this.name = name;

    return {
        name: 'Teste'
    }
}

const p2 = Pessoa2('oi');
console.log(p2);

