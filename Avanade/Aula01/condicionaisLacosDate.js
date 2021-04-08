// var idade = prompt("Qual a sua idade?")
var idade = 12;
if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

var count = 5;
while (count > 0) {
    console.log(count);
    count--
}

for (count = 10; count > 3; count--) {
    console.log(count);
}

var d = new Date();
console.log(d);
console.log(d.getDay());
console.log(d.getMonth() + 1); // adicionar 1 pois vai de 0 a 11

// ----
var lista = ['Alemanha', 'Inglaterra', 'Escócia']
lista.push('Polônia');
lista.pop('Inglaterra');
console.log(lista);