function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2); // fixa o primeiro parâmetro em 2

console.log(soma2(5));
console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5)); // lembrar que soma2 guarda a function(b) {}

const soma3 = soma(3);
console.log(soma3(5));