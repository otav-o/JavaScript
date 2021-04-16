function Person(initialName) {
    let name = initialName;

    this.getName = function() {
        return name;
    }

    this.setName = function(newName) {
        name = newName;
    }
}

const p = new Person('Otávio');

console.log(p);

console.log(p.getName());

console.log(p.name);

p.setName('Olá');
console.log(p.getName());

// só é exportado o que está no this
// ----

// somente node.js (versão 12 do JS): usar cerquilha # para private

class Person {
    #name = '';

    constructor (initialName) {
        this.#name = initialName;
    }
    
    // this.getName = function() {
    getName = function() {
        return this.#name;
    }

    setName = function(newName) {
        this.#name = newName;
    }
}

const p = new Person('Otávio');

console.log(p);

console.log(p.getName());

console.log(p.name);

p.setName('Olá');
console.log(p.getName());