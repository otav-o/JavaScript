fn();

function fn() {
    console.log(text); // undefined. Sem ReferenceError
    var text = 'Exemplo';
    console.log(text);
}

// fn();

// function fn() {
//     var text;
//     console.log(text);

//     text = 'Exemplo';

//     console.log(text);
// }

// fn();