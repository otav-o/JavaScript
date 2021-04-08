var nome = 'Otávio';
var idade = 29;
var idade2 = 10;
// alert('Meu JS externo');
document.write(nome + ', bem vindo')
document.write(29 + 10);
frase = "Bom dia";
frase.replace("dia", "noite"); // não é mudança definitiva
frase.toLowerCase();
console.log(frase);
console.log(frase.toUpperCase());
console.log(frase.replace("a", "o"))

// Array
var frutas = ['maçã', 'pêra', 'laranja'];
frutas.push('Uva'); // adiciona à última posição
frutas.pop(); // remove o último elemento
console.log(frutas[1]);
console.log(frutas);
console.log(frutas.reverse());
console.log(frutas.length);
console.log(frutas.toString()[2]);
console.log(frutas.join(' -> ')); // também transforma em string

// Dictionary 
var fruta = {
    nome: 'maçã',
    cor: 'vermelha'
}
console.log(fruta);
console.log(fruta.nome);

var maisFrutas = [
    {
        nome: 'maçã',
        cor: 'vermelha'
    },
    {
        nome: 'pêra',
        cor: 'amarela'
    },
    {
        nome: 'uva',
        cor: 'roxa'
    },
]

console.log(maisFrutas);
console.log(maisFrutas[1].nome); // pêra
