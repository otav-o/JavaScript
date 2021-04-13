function fn() {
    log('Hoisting de função'); // é possível chamar antes da declaração (má prática). Não tem undefined
    
    function log(value) {
        console.log(value);
    }
}

fn();

// function fn() {
//     function log(value) {
//         console.log(value);
//     }

//     log('Hoisting de função');
// }