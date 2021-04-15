// in
musica in musicas

// Arrays
var arvores = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho', 'sicômoro');
console.log(0 in arvores); // true
console.log(3 in arvores); // true
console.log(5 in arvores); // false

console.log('cedro' in arvores); // false. Deve-se especificar o índice, não o elemento.

console.log('length' in arvores); // true (propriedade de Array)

// Objetos predefinidos
console.log('PI' in Math); // true
var minhaString = new String('coral');
console.log('length' in minhaString); // true

// Objetos personalizados
var meuCarro = {marca: 'Volkswagen', modelo: 'Fusca', ano: 1945};
console.log('marca' in meuCarro); // true (índice);
console.log('modelo' in meuCarro); // true;
console.log('Fusca' in meuCarro); // false (valor)

// instanceof
objeto instanceof tipoObjeto

var dia = new Date(2021, 04, 15);

if (dia instanceof Date) {

}

console.log (dia instanceof Date); // true