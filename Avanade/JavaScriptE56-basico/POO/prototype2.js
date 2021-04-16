'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {}
}

function Cachorro(morde) {
    Animal.call(this, 4);
    
    this.morde = morde;
    this.latir = function() { // será criada para cada objeto
        console.log('Au au');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug, pitbull);


function Animal() {}
Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal); // prototype de cachorro é derivado de prototype de animal (já vai ter qtd de patas e movimentar() por padrão). Com o new cachorro, não se cria novamente a função
Cachorro.prototype.latir = function() {
    console.log('Au au');
}

// const pug = new Cachorro(false);
// const pitbull = new Cachorro(true);

// console.log(pug, pitbull);