function Person(initialName) {
    var name = initialName;

    Object.defineProperty(this, 'name', {
        get: function() {
            return name;
        },
        set: function(value) {
            name = value;
        }
    }); // igual propriedade de c#, o método fica implícito. Basta acessar como se fosse um atributo público
}

class Person {
    #name = '';

    constructor (name) {
        this.#name = name;
    }
    
    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
} // p.name e p.name = 'algumacoisa'