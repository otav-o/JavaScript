const textSize = 'Texto'.length;
console.log(textSize);

// Retorna um array com as partes divididas (substrings)
const splittedText = 'Texto'.split('x');
console.log(splittedText);

const splittedText2 = 'Texto texto texto'.split('x');
console.log(splittedText2); // [ 'Te', 'to te', 'to te', 'to' ]

// Substitui a primeira ocorrência
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log(replacedText);

const replacedText2 = 'Texto Texto Texto'.replace('Text', 'txeT');
console.log(replacedText2);

// Retorna uma substring
const lastChar = 'Texto'.slice(-1); // sem o segundo parâmetro, vai até o final
console.log(lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1); // posição inicial, posição final
console.log(allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log(secondToEnd);

const twoCharsFromBeginning = 'Texto'.substr(0, 2); // posição inicial, length
console.log(twoCharsFromBeginning);