const name = 'Otavio';

// Não pode alterar o valor
//  name = 'Ricardo';

const user = {
    name: 'Otavio'
};

// Mas pode-se trocar as propriedades de um objeto declarado com const
user.name = 'Outro nome';

// Não pode fazer a variável apontar para outro lugar
/*
    user = {
        name: 'Otavio' // nem mesmo se os atributos forem idênticos
    };
*/

const people = ['Otavio', 'Ricardo', 'Ana'];

// Pode adicionar novos itens
people.push('Manuela');

// Remover
people.shift();

// Alterar
people[1] = 'James';

// people = ['oi']

// Enfim: não é possível atribuir novamente a uma constante