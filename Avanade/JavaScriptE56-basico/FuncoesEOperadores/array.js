const users = ['Otávio', 'João', 'Helena'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const people = [
    {
        name: 'Otavio',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'João',
        age: 35,
        gender: gender.MAN
    },
    {
        name: 'Helena',
        age: 21,
        gender: gender.WOMAN
    },
];

console.log(people.length);
console.log(Array.isArray(people));

people.forEach((person, index, arr) => { // arr é o array corrente
    console.log(person.name, index);
});

// Filtrar array: retorna um novo
const men = people.filter(person => person.gender === gender.MAN);
console.log(men);

// Retornar um novo
const peopleWithCourse = people.map(person => {
    person.course = 'Introdução ao javascript';
    return person;
});

console.log(peopleWithCourse);

// Transformar um array em outro tipo
const totalAge = people.reduce((age, person) => {
    age += person.age;
    return age; // tem que retornar a propriedade do reduce
}, 0); // função, valor inicial da propriedade (age começa com zero)

console.log('soma', totalAge);

const totalEvenAges = people
    .filter(person => person.age % 2 === 0)
    .reduce((age,person) => {
        age += person.age;
        return age;
    },0);

console.log('soma idades pares', totalEvenAges);