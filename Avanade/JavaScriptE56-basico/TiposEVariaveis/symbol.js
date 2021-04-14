const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(symbol1);

// Symbols são únicos (mesmo que a inicialização seja igual)

const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

console.log(nameSymbol1);

const user = {
    [nameSymbol1]: 'Otávio',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Dioscânio'
}

console.log(user);

// Symbols criam propriedades que não são enumerables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log(Object.keys(user)); // também não aparecem aqui
console.log(Object.values(user));

// Função para exibir os symbols que o objeto tem
console.log(Object.getOwnPropertySymbols(user));

// Exibir todas as propriedades: Reflect
console.log(Reflect.ownKeys(user));

// Outra utilidade de Symbols: enums
const directions = {
    UP      : Symbol('UP'),
    DOWN    : Symbol('DOWN'),
    LEFT    : Symbol('LEFT'),
    RIGHT   : Symbol('RIGHT')
};