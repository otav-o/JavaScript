class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(obs => obs !== fn);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

const o = new Observable();

const log1 = data => console.log('Subscribe 1: ' + data);
const log2 = data => console.log('Subscribe 2: ' + data);
const log3 = data => console.log('Subscribe 3: ' + data);

o.subscribe(log1);
o.subscribe(log2);
o.subscribe(log3);

// até aqui não executa nada

o.notify('notificação');

o.unsubscribe(log2);

o.notify('notificação 2')