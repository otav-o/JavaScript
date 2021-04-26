// Funções convencionais

function log (value) {
    console.log(value);
}

log('test');

// Em JS as funções são de primeira classe (podem ser passadas por parâmetro para outras funções)

var log2 = function(value) { // função anônima: atribuir a uma variável
    console.log(value);
};

log2('test2');

// Arrow function: função anônima (deve-se atribuir a uma variável ou passá-la como parâmetro)

var sum = (a, b) => a + b;
console.log(sum(23, 17));

var sum2 = (a, b) => {
    return a + b;
}

// Se existir apenas um argumento, pode-se omitir os parênteses

var returnObj =  () => ({ test: 123 }); // colocar parênteses em volta

function Car() {
    this.foo = 'bar'
}

console.log(new Car());

// hoisting: function comum é elevada ao topo mesmo se for declarada depois
// Não funciona com arrow functions!

var obj = {     // Contexto é de invocação

    showContext: function showContext() {

        // var _that = this;

        console.log(this); // this referencia o próprio objeto
        this.log('teste de dentro de obj');

        setTimeout(function() {
            console.log(this); // this é o window (global)
            this.log('depois de 1000ms');
        }.bind(this), 1000)
    },
    
    log: function log(value) {
        console.log(value);
    }
}

obj.showContext(); 



var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            console.log(this); // this é o mesmo de showContext();
            this.log('depois de 1000ms');
        }, 1000)
    },
    
    log: function log(value) {
        console.log(value);
    }
}

obj.showContext(); // arrow function: contexto léxico (this é aproveitado).


