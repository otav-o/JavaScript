const user = {
    name: 'Otávio',
    lastName: 'Caçador'
}

console.log(Object.keys(user)); // [ 'name', 'lastName' ] // chaves como string

console.log(Object.values(user)); // [ 'Otávio', 'Caçador' ]

console.log(Object.entries(user)); // [ [ 'name', 'Otávio' ], [ 'lastName', 'Caçador' ] ] // retorna um array com os pares chave-valor

// Recebe um objeto-base por parâmetro e n outros objetos. Merge, junção
Object.assign(user, {age: 10}); // adiciona ao objeto (não cria outro). Não é recomendado alterar o objeto original

console.log(Object.assign({}, user, {height: 1.85})); // é melhor deixar um objeto vazio como target (não altera os demais)

console.log(user);

// Previnir qualquer alteração no objeto (ou inclusão/exclusão de propriedade)
const newObj = { oi: 'oi'};
Object.freeze(newObj);

newObj.oi = 'new value'; // nenhuma destas linhas produz efeito
delete newObj.oi;
newObj.new = 'ola';

console.log(newObj);

// Permite alteração mas sem deletar ou criar propriedade
const person = {name: 'Jair'};
Object.seal(person);

person.name = 'Verde'; // ok
delete person.name; // não produz efeito
person.age = 15; // não produz efeito;

console.log(person);