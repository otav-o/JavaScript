// SYMBOLS
// Maneira de gerar um identificador único

const uniqueId = Symbol(); // não se usa new

console.log(uniqueId);

// Um symbol nunca é igual a outro. Não é uma string, um número ou qualquer outra coisa. Simplesmente um id único.

const uniqueId2 = Symbol('Oi'); // passar valor: serve única e exclusivamente para fins de debug!

// Gerar propriedades 'privadas' - evitar o acesso não intencional

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);
Object.keys(obj); // não retorna symbols
Object.getOwnPropertySymbols(obj);

// Well-known symbols
// Propriedades: iterator, split, toPrimitive, etc.

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const obj2 = {
    [Symbol.iterator]() { // metapropriedade, torna o objeto iterável
        // aqui fica uma espécie de implementação?
    }
}

const arr = [1, 2, 3, 4]
const it = arr[Symbol.iterator]();

while (true) {
    let {value, done} = it.next();
    console.log(value);
    if (done) {
        break;
    }
}
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// ES6 deixou isso mais fácil com for of
for (let value of arr) {
    console.log(value);
}

const str = 'Bom dia Brasil';

for (let value of str) {
    console.log(value);
}

// Usar o well know symbols para deixar um objeto iterável
// !!

const obj3 = {
    values: [1, 2, 3, 4, 5],
    
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

const it2 = obj3[Symbol.iterator]()

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

for (let value of obj3) console.log(value); // agora é possível usar value of

const arr2 = [...obj3]; // e spread de objeto para um array
console.log(arr2); 
