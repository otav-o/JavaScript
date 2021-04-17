let loggendIn = false;

function callIfAuthenticated(fn) { // controla a execução da função
    return !!loggendIn && fn();
}

function sum(a, b) {
    return a + b;
}

console.log(callIfAuthenticated(() => sum(2, 3)));
loggendIn = true;
console.log(callIfAuthenticated(() => sum(2, 3)));
loggendIn = false;
console.log(callIfAuthenticated(() => sum(2, 3)));

// --
// function readonly(targer, name, descriptor) {
//     descriptor.writable = false;
//     return descriptor;
// }

// class Job {
//     @readonly
//     title() { return 'CEO'}
// }

// --
// @CompositionEvent({
//     selector: 'app-reactive-favorite-color',
//     template: `
//         Favorite Color: <input type='text' [formControl]='favoriteColorControl'>
//     `
// })

// export class FavoriteColorComponent {
//     favoriteColorControl = new FormControl('');
// }

