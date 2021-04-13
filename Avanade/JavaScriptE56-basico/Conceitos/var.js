var test = 'de fora';

(() => {
    console.log(`valor dentro da função "${test}"`);
    // não usa o 'de fora' pois var respeita o escopo global e o de função. Não dá erro (e sim undefined) por causa do hoisting
    // se não houvesse a declaração com var dentro da função, usaria o 'de fora'

    if (true) {
        var test = 'dentro do if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`valor após a execução do if "${test}"`);
})(); // já executa

console.log(`valor fora da função "${test}"`);