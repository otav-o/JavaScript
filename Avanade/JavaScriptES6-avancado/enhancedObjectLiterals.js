var prop2 = 'Segunda propriedade';

function method1() {
    console.log('método 1');
}

var propName = 'testeNome';

var obj = { 
    prop1: 'Objeto literal escrito da maneira clássica',
    prop2,
    method1,
    sum: (a, b) => a + b,
    sum2(a, b) { return a + b },
    [propName + 'oi']: 'propValor' // possível com o ECMAScript6
}

console.log(obj);
console.log(obj.sum(2, 3));

obj[propName + 'oi2'] = 'propValor'; // antes, só era possível realizar expressões para definir nomes de atributos após a criação do objeto.