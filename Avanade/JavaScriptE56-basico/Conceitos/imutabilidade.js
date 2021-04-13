const user = {
    name: 'Otávio',
    lastName: 'Dioscânio'
};

function getUserWithFullName(user) {
    return {
        ...user, // spread operator (ES2018)
        fullName: `${user.name} ${user.lastName}` // não altera o user, retorna um novo objeto
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);
console.log(user);