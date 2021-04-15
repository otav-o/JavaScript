// for
const array = ['oi', 'olá', 'pipoca'];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element, index);
}

// while
var n = 0;
var x = 0;
while (n < 3) {
    x += n;
    n++;
}

console.log(x);

// do.. while
let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);

let arr = [3, 5, 7];
arr.propriedade = 'oi';

// ATENÇÃO
// for IN, for OF
for (let i in arr) {
    console.log(i); // imprime índices e 'propriedade' (e não o valor dela 'oi')
    // 0, 1, 2, propriedade
}

for (let i of arr) {
    console.log(i); // imprime o conteúdo (não os índices) e ignora as propriedades.
    // 3, 5, 7
}

// CONTINUE/BREAK

var index = 0;
while(true) {
    index++;
    if (index > 2)
        break; // cancela o laço

    console.log(index); 
}

const array = [1, 2, 3, 4, 5, 6];

for(let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element % 2 === 0) continue; // pula para a próxima iteração

    console.log(element);
}