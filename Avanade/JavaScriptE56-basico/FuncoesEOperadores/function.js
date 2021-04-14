// functions também são objetos (apesar de o typeof retornar um function)

function fn() {
    return 'Olá';
}

const arrowFn = () => 'Olá';
const arrowFn2 = () => {
    // mais de uma expressão
    return 'Olá';
}

// Passar propriedade
fn.prop = 'Propriedade'

console.log(fn()); // imprime o retorno
console.log(fn.prop);

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Currying
// Receber e retornar funções
const controlarExecucaoFuncao = funcaoPorParametro => allowed => { // recebe um parâmetro na definição e outro na hora de executar (currying)
    if (allowed) {
        funcaoPorParametro();
    }
};

const controle = controlarExecucaoFuncao(fn); // passagem do primeiro parâmetro (a função)

controle(true); // Executará a função fn
controle(); // Não executará

// A mesma função anterior, do jeito tradicional
function controlarExecucaoFuncao(funcaoPorParametro) {
    return function (allowed) {
        if (allowed) {
            funcaoPorParametro();
        }
    }
}