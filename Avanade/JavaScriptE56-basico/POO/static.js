// Função
function Person() {}
Person.walk = function() { // implementação static do JS antigo. Lembrar que funções herdam de object e podem ter propriedades
    console.log('andando');
}

Person.walk();


// Classe
class Person2 {
    static walk() { // ES6: palavra static
        console.log('andando2');
    }
}

Person2.walk(); // chamada sem instaciar