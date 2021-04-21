const arr = [1, 2, 4];
const arr2 = new Array(1, 2, 3);
const arr3 = Array.of(1, 2, 5);

const people = Array.of('John', 'Cris', 'Jenny');
const numbersAndStrings = Array.of(1, 2, 'text1', 'text2')

// Obs.: new Array(); passar um único parâmetro inteiro: cria um array com n posições vazias
// Mais de um parâmetro: cria igual Array.of
const arrWith3Slots = Array(3);

// Array.from
// Cria uma nova instância de array a partir de um parâmetro array-like ou iterable object (node list, setMap)

const divs = document.querySelectorAll('div'); // node list
const arr = Array.from(divs);

// Inserir e remover elementos
// Push: insere 1 ou mais elementos no final do array. Retorna o length

const arr = ['banana', 'watermelon', 'apple'];
var arrLength = arr.push('strawberry')

console.log(arrLength); console.log(arr);

// Pop: remove o último elemento. Retorna o item removido

var removedFruit = arr.pop();
console.log(removedFruit); console.log(arr);

// Unshift: adiciona no início. Também retorna o tamanho do array.
arrLength = arr.unshift('orange');

// Shift: remove no início e retorna o item removido

removedFruit = arr.shift();

// Concat: merge de dois arrays, retornando um novo

const snacks = ['Doritos', 'Rufles', 'Lays'];
const food = snacks.concat(arr); // primeiro array, segundo array
console.log(food);

// Slice: retorna um array 'fatiando' o array de acordo com um início e fim
// Passar apenas um parâmetro: vai até o final.
// Inclui a posição inicial, mas não a final
// Não altera o array original.

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.slice(0, 3)); // 1, 2, 3 (posições 0, 1, 2)
console.log(numbers.slice(-2)); // 5, 6

// Splice: adiciona novos elementos enquanto remove elementos antigos. Retorna o que foi removido
// Importante: não cria outro

const removedSubArray1 = numbers.splice(2); // mantém os 2 primeiros elementos. Neste caso não adicionou nada
console.log('numeros restantes: ' + numbers) // [1, 2]
console.log('numeros removidos: ' + removedSubArray1) // [3, 4, 5]

numbers.splice(0, 0, 'first'); // início, quantidade de itens removidos, o que será adicionado na posição início
console.log(numbers); // ['first', 1, 2]

// mais um exemplo com splice

const fruits = ['melancia', 'babana'];
fruits.splice(1, 0, 'acerola');
// fruits ['melancia', 'acerola', 'banana'] - inserido na posição 1, nada removido.
fruits.splice(2, 1, 'laranja', 'amora'); // ['banana']
// fruits ['melancia', 'acerola', 'laranja', 'amora'] - removido 1 elemento a partir da posição 2. Inseridos outros 2
console.log(fruits);
