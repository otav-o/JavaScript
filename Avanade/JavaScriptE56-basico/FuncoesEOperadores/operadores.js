// Operador binário: dois operandos, com o operador no meio. Unário: apenas um operando.

12 % 5

const a = ++2; // 3
const b = 2++; // 2

// Negação (-) e Adição (+)
-3
+"3"    // 3 força a conversão para number
+true   // 1
+false  // 0
-true   // -1

2**3
10** -1

2 * (3 + 2)


x *= y
x %= y
// etc.

// Comparação
"3" == 3; // true. Quase não é usado
"3" === 3; // false. Estritamente igual

// >, !==, !=, <, >=, <=


// Condicional - ternário

condicao ? valor1 : valor2

// Lógicos (| &)

var a1 = true && true;
var a2 = false || (3==4);
// se a comparação for de booleanos, vai retornar true/false

var a3 = false && "gato";
var a4 = "Gato" && false;
var a5 = "Gato" && true;
var a6 = 'true' && 'true';

var o1 = true || 'gato';
var o2 = 'gato' || true;
var o3 = false || 'gato';
var o4 = 'gato' || false;
var o5 = true || true;
var o6 = false || true;

// Não lógico

var n1 = !true;
var n2 = !false;
var n3 = !"Gato"; // false

// true
" "
1
['teste']

// false
""
0
// []

// !! // força a ser booleano