// se não passar um parâmetro, ele fica undefined. Multiplicar um número por undefined, retorna NaN (not a number)

function multiply(a, b) {
    // b = b || 1; problema se b for 0

    // b = typeof b === 'undefined' ? 1 : b; resolve mas fica verboso
    return a * b;
}

console.log(multiply(5, 0));

function multiply2(a, b = 1) {
    return a * b;
}

console.log(multiply2(4, undefined)); // 4
console.log(multiply2(undefined, 4)); // 4


// Lazy evaluation: usar funções para receber o valor de um argumento. Função só é invocada se o parâmetro estiver faltando

function multiply3(a, b = randomNumber()) {
    return a * b;
}
console.log(multiply3(5));
console.log(multiply3(5, 10));

function randomNumber() {
    console.log('Número aleatório gerado');
    return Math.random() * 10;
}

// Não podemos criar funções construtoras com arrow functions