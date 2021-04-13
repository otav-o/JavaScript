function init() {
    const exemplo = 'Essa variável';

    return function() {
        console.log(`1 - O valor da variável exemplo é ${exemplo}`);
        return function() {
            console.log(`2 - O valor da variável exemplo é ${exemplo}`);
            return function() {
                console.log(`3 - O valor da variável exemplo é ${exemplo}`);
            }
        } // O ideal é trabalhar com funções puras - receber por parâmetro, não usar a variável global
    }
 }
 
 const initFn1 = init();
 const initFn2 = initFn1();
 const initFn3 = initFn2();
 initFn3();

 init()()()()