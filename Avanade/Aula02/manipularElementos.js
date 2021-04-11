function clique() {
    console.log('Obrigado por clicar');
    console.log(document.getElementById('agradecimento'));

    document.getElementById('agradecimento').innerHTML = '<b>Obrigado por clicar</b>'; // injetar no html este código
}

var redirecionar = () => {window.open("https://google.com.br")} // abre em outra aba

// window.location.href = "https://google.com"; // abre na mesma aba

// var trocarTexto = () => {
//     document.getElementById("mouseover").innerHTML = "Você passou";
// }

// function voltar() {
//     document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
// }

function trocarTexto(elemento) { // melhor do que depender do id
    elemento.innerHTML = "Você passou";
}

var voltar = (elemento) => {
    elemento.innerHTML = "Passe o mouse aqui";
}

var load = () => alert("Página carregada")

function funcaoChange(elemento) {
    console.log(elemento.value)
}