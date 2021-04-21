// FOREACH

const array1 = [1, 2, 3, 4, 5];

array1.forEach((value, index, array) => 
    console.log(`index: ${index}, value: ${value}, array: ${array}`)
)

array1.forEach((number => console.log(number)))

// MAP
// Retorna um novo array.

const array2 = [1, 2, 3, 4, 5];
array3 = array2.map(value => value * 2);
console.log(array3);

// FLAT
// Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada (depth)
// depth é 1 por padrão

const array4 = [1, 2, [3, 4]];
console.log(array4.flat()); // [1, 2, 3, 4]

const array5 = [1, 2, 3, [4, 5, [6, 7, 8]]]
console.log(array5.flat()); // [ 1, 2, 3, 4, 5, [ 6, 7, 8 ] ]
console.log(array5.flat(2)); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// FLATMAP
// Primeiro executa o map. Depois, aplica flat(1) ao resultado

const array6 = [1, 2, 3, 4, 5];
console.log(array6.flatMap(value => [value * 2]));
console.log(array6.flatMap(value => [[value * 2]]));

// KEYS
// Retorna um Array Iterator que contém as chaves para cada elemento

const array7 = [1, 2, 3, 4];
const array7Iterator = array7.keys();
for (let i = 0; i < array7.length; i++)
    console.log(array7Iterator.next());

// VALUES
// Retorna um Array Iterator que contém os valores de cada elemento

const array8 = [1, 2, 3, 4];
const array8Iterator = array8.values();
for (let i = 0; i < array8.length; i++)
    console.log(array8Iterator.next());

// ENTRIES
// Retorna um Array Iterator que contém os pares chave-valor

const array9 = [1, 2, 3, 4];
const array9Iterator = array9.entries();
for (let i = 0; i < array9.length; i++)
    console.log(array9Iterator.next());

// FIND
// Retorna o primeiro item que satisfaça uma condição

const array10 = [1, 2, 3, 4];
console.log(array10.find(value => value > 2));

// FINDINDEX
// Retorna o índice do primeiro item que satisfaça uma condição

const array11 = [1, 2, 3, 4];
console.log(array11.findIndex(value => value > 2));

// FILTER
// Retorna um novo array com todos os elementos que satisfazem a condição

const array12 = [1, 2, 3, 4]
const array13 = array12.filter(value=> value > 2);
console.log(array13);

// INDEXOF
// Retorna o índice da primeira ocorrência de um elemento

const array14 = [1, 'banana', 2, 3, 4];
console.log(array14.indexOf('banana'));

// LASTINDEXOF
// O índice da última ocorrência de um elemento

const array15 = [1, 'banana', 2, 3, 'banana', 4];
console.log(array15.lastIndexOf('banana'));

// INCLUDES
// Retorna um booleano se o item estiver no array

const array16 = [1, 'banana', 2, 3, 'banana', 4];
console.log(array16.includes(5));

// SOME
// Retorna um booleano se pelo menos um item do array satisfizer uma condição

const array17 = [1, 3, 3, 4, 3];
console.log(
    array17.some(value => value % 2 == 0) // se há pelo menos um par
);

const array18 = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4},
];

console.log(array18.some(element => element.grade >= 7));
console.log(array18.find(element => element.grade >= 7));

// EVERY
// Retorna um booleano verificando se todos os itens de um array satisfazem a condição

const array19 = [1, 3, 3, 4, 3];
console.log(array19.every(value => value % 2 === 0)); // se todos são pares

// SORT
// Ordena elementos conforme uma condição

const array20 = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4},
];

const array21 = array20.sort((current, next) => current.grade - next.grade); // ordenar por nota (crescente)
console.log(array21);

// REVERSE
// Inverte os elementos do array

const array22 = [1, 2, 3, 4, 5];
console.log(array22.reverse());

// JOIN
// Retorna uma string com os elementos, separando por delimitador

const array23 = [1, 2, 3, 4, 5];
const string1 = array23.join(' -> ');
console.log(string1);

// REDUCE
// Retorna um novo tipo de dado iterando cada posição do array

const array24 = [1, 2, 3, 4, 5];
const number1 = 
    array24.reduce(
        (total, value) => total += value, 0
    );
    // executa a função para cada item do array. Primeiro parãmetro é o que vai ser retornado (arrow function). Segundo parâmetro é o valor inicial (define o tipo). 
console.log(number1);

const array25 = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4},
];

console.log(array25.reduce((total, element) => total += element.grade, 0));

const string2 = 
    array25.reduce(
        (names, element) => names += element.name + ' ', ''
    );
console.log(string2);

// const array26 = array25.reduce(
//     (finalArray, element) => finalArray.push(element)
//     , []
// );
// console.log(array26); // não deu certo

const array26 = array25.reduce(
    (finalArray, element) => {
        finalArray.push(element)
        return finalArray;
    }, []
);
console.log(array26);

/// ---------
const colaboradores = [
    { nome: "Cris", horasTrabalhadas: 220 },
    { nome: "Rebeca", horasTrabalhadas: 210 }
  ];
  
  function adicionaSalario(colaborador) {
    const salario = colaborador.horasTrabalhadas * 50;
    colaborador.salario = salario;
  
    return {
      salario: salario
    };
  }
  
  const colaboradoresComSalario = colaboradores.map(adicionaSalario);
  
  console.log(colaboradoresComSalario);
