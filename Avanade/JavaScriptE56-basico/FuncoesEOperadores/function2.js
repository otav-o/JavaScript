(() => {
    this.name = 'Nome no contexto de criação';
    
    const getNameArrowFn = () => this.name;
    
    function getName() {
        return this.name;
    }
    
    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowFn : getNameArrowFn, 
        getName // é o mesmo que getName : getName. Uso: quando a chave e o valor forem os mesmos
    }
    
    console.log(user.getNameArrowFn());
    console.log(user.getName()); // executa de dentro do objeto (é propriedade dele)
})();
    

// o this da arrow function sempre vai referenciar o escopo de criação. Nunca vai mudar
// já o de function convencional referencia o de execução