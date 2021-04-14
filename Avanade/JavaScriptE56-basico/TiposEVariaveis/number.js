const myNumber = 12.4032;

const numberAsString = myNumber.toString();
console.log(numberAsString, typeof numberAsString);

typeof numberAsString;

const fixedTwoDecimals = myNumber.toFixed(2); // retorna com as 2 primeiras casas decimais. Uma forma de padronizar os zeros após a vírgula

console.log(fixedTwoDecimals, typeof fixedTwoDecimals);

const numberAsFloat = parseFloat('13.22');
const numberAsInt = parseInt('13.20');

console.log(numberAsFloat, typeof numberAsFloat);
console.log(numberAsInt, typeof numberAsInt);

// Não se diferencia inteiro de float, os dois são number (observe o typeof)