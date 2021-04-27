// Jeito antigo antes do ES6: paradigma imperativo

function sum(a, b) {
    console.log(arguments); // palavra reservada que representa uma lista de todos os argumentos. Prototype Object

    var value = 0;

    for (var i = 0; i < arguments.length; i++)
        value += arguments[i];

    return value;
}

console.log(sum(3, 4, 4, 3, 2, 1))

// REST OPERATOR ...
// Prototype é um Array
// Mais decritivo e menos imperativo

function sum2(...args) {
    console.log(args);
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum2(3, 4, 4, 3, 2, 1))


// lista de 'arguments' não existe em arrow functions (tem que usar o rest operator)
const sum3 = (a, b, ...rest) => {
    console.log(a, b, rest);
}


console.log(sum3(3, 4, 4, 3, 2, 1))


//
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum4 = (...rest) => {
    return multiply.apply(undefined, rest); // verboso e pouco descritivo
}

console.log(sum4(3, 4, 4, 3, 2, 1))

// SPREAD OPERATOR
// Escreve da mesma forma que o rest operator, mas funciona de maneira diferente: em vez de criar um array, copia cada um dos valores.
// Quebra os itens e repassa para algum lugar

const multiply2 = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum5 = (...spread) => {
    return multiply2(...spread);
}

console.log(sum5(3, 4, 4, 3, 2, 1))


// strings, arrays, objects e iterables

const str = 'Esta é uma frase';
const arr = [1, 2, 3, 4];

function logArgs(...args) {
    console.log(args);
}

logArgs(...str); // imprime um array com cada caractere
logArgs(...arr);
logArgs(arr); // ué

// cada item do array vira um argumento da função (quebra sem precisar do método apply)


// spread para construir arrays
const arr2 = [5, 6, 7].concat(arr); // antes
const arr3 = [...arr, 5, 6, 7]; // spread
const arr4 = [...arr2, ...arr, 0, 0, 0];

const arr2Clone = [...arr2];

console.log(arr2, arr3, arr4, arr2Clone)

// spread para construir objetos literais
const obj = {
    test: 123,
};

const obj2 = {
    test: 100,
    ...obj,
    test2: 'hello',
}
// as propriedades podem ser sobrescritas. Vale a que veio depois (test: 123)

console.log(obj2);

// Não é possível fazer o spread no objeto para construir um array (objetos literais não são iteráveis)
// Somente para construir outro objeto
// const array = [...obj]; - erro!

const obj3 = obj;
obj3.test = 456; // reflete no primeiro objeto. O ideal é criar um clone

const obj4 = {...obj}; 

// shallow clone (clone raso: se o objeto tiver outros objetos como propriedades, elas serão compartilhadas)

const obj5 = {
    test: 100,
    ...obj,
    subObj: {
        test: 'objeto interno',
    },
}

const obj6 = {...obj5};
obj6.test = 150;
obj6.subObj.test = 'modifiquei pelo obj6';

console.log(obj6);
console.log(obj5); // subObj também alterado aqui

const obj7 = {...obj5, subObj: {...obj5.subObj}}; // solução
obj7.test = 'olá';
obj7.subObj.test = 'modifiquei pelo obj7';

console.log(obj7);
console.log(obj6);






