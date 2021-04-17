function Person() {
    if (!Person.instance) {
        Person.instance = this;
    }

    return Person.instance;
}

const p = Person.call({name: 'Olá'});

const p2 = Person.call({name: 'Olá2'});

console.log(p);
console.log(p2);