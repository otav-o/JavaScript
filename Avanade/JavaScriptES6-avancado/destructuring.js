// DESTRUCTURING ASSIGNMENT
// Pegar partes de uma variável

// Antes
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Com ES6

var [apple2, banana2, orange2, [tomato2], undf] = [
    'Apple', 'Banana', 'Orange', ['Tomato']
];

console.log(apple, apple2);
console.log(tomato, tomato2);
console.log(undf);


// Objetos

var obj = {
    name: 'Celso',
}

var name = obj.name;

// Destruir o objeto e pegar a propriedade name e colocar em name2
var { name: name2 } = obj;
console.log(name2);
// em array não precisa indicar a :chave, pois há o índice


var obj2 = {
    name: 'Celso',
    props: {
        age: 20,
        colors: ['black', 'blue'],
    },
};

var {
    props: {age} // destructing dentro da propriedade
} = obj2;

var {props: {colors: [color1, color2]}} = obj2;
// equivale a `var color1 = obj2.props.colors[0]`

console.log(age);
console.log(color1, color2);


//
var arr2 = [{name: 'Melon', type: 'fruit'}, {name: 'Banana', type: 'fruit'},];

var [{ name }] = arr2; // atribuir nome de variável customizado: dois pontos e o nome
console.log(name)


// Em funções

var sum = (arr) => arr[0] + arr[1];

var sum2 = ([a, b]) =>  a + b;

var sum3 = ([a, b] = [0, 0]) => a + b;

console.log(sum2([5, 5]))
console.log(sum3([5, 5]))

var sum4 = ({a, b}) => a + b;

console.log(sum4({a: 2, b: 5}));



