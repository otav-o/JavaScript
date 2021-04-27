// GENERATOR
//Funções com pausa

function hello() {
    console.log('Hello');
    console.log('From');
    console.log('Function');
}

hello();

// prototype de generator tem next();

function * hello2() {
    console.log('Hello');
    yield 1; // 1 retorna como value

    console.log('From');
    const value = yield '2'; // recebe value

    console.log('Function');

    console.log(value)
}

const it = hello2();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next('De fora')); // passa o parâmetro para o yield

// Além de pausar a função, permite passar e receber dados dela.

function * naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it2 = naturalNumbers();
it2.next();

// for (value of it2) {
//     console.log(value);
// } // loop infinito


// Generators para construir iteradores
const obj = {
    values: [1, 2, 3, 4, 5],
    
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}

for (let value of obj) {
    console.log(value);
}


// Lembretes: 
// 1. ao consumir um iterator, sabemos que a iteração finalizou quando a proprieade done é true.
// 2. tipos e objetos iteráveis possuem um método responsável por gerar o seu iterador, sendo acessível pela chave Symbol.iterator
// 3. for... of é utilizado para obter os valores gerados pelo iterador em um objeto (ou tipo iterável)
// 4. generators podem receber valores em cada pausa (yield). Basta passar por parâmetro ao método next