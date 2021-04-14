let user = {
    name: 'Otávio'
};

user.name = 'Outro nome 1';
user['name'] = 'Outro nome 2'; // acessar pelo nome dela (por isso uma string)

const prop = 'name';
user[prop] = 'Outro nome 3'; // legal

// Criar uma propriedade
user.lastName = "Dioscânio";
user['middleName'] = 'Augusto';

console.log(user);

delete user.name;

console.log(user);

console.log(user.name);

