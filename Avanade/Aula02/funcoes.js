function soma (n1, n2) {
    return n1 + n2;
}

function reposicionarPalavra(frase, palavra, novaPalavra) {
    return frase.replace(palavra, novaPalavra);
}

var reposicionarPalavra2 = (frase, palavra, novaPalavra) => frase.replace(palavra, novaPalavra)

console.log(soma(1, 2));

var frase = "Bom dia para você";
console.log(reposicionarPalavra(frase, "você", "mim"));
console.log(reposicionarPalavra2(frase, "para", "pra"));

var validar = 0;

function validaIdade(idade) {
    // var validar; // cria uma variável local, ignora o validar de fora (usando a palavra reservada var)
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validaIdade(idade);
console.log(validar); // imprime true/false, a função acima muda a variável global


