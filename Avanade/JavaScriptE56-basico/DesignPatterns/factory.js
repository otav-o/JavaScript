function Person(name, age, customProperties) {
    return {
        name,
        age,
        ...customProperties
    }
}

const p = Person('olá', 15, {sex: 'M', lastName: 'oi'});
console.log(p);