Início: 03/11/2020 - terça

Link da playlist: <a href='https://www.youtube.com/watch?v=lcKo-ycLDNw&list=PLx4x_zx8csUj3IbPQ4_X5jis_SkCol3eC&index=1'>aqui</a>

### Aula 001 - document.write

- A tag `<script></script>` pode estar no body
- Pode haver vários blocos script na página (mas fica desorganizado)
- O método `write` insere conteúdo no body. Nem ele nem a classe são maiúsculos
- Não se esqueça do ponto e vírgula `;` no final

```javascript
document.write("<p style='color:red'>Bom dia<br>Como você está?</p>");

document.write('100' + 50); // 10050

document.write(100 + 50); // 150
```

- Pode-se usar aspas simples ou duplas, tomando o cuidado para não misturar as duas. Inclusive é a única forma de colocar aspas dentro de aspas.

---

### Aula 002 - Variáveis

- Servem para armazenar valores na memória RAM
- Em JS não precisa informar o tipo de dado
  - Inclusive é possível alternar automaticamente entre os tipos, sem conversões, pois é uma linguagem bem flexível
- Declara-se usando a palavra `var`
  - Na verdade, ela é opcional (igual em Python), mas é bom usá-la para demarcar a primeira ocorrência (função estética)
- Observação sobre concatenação: se há string na expressão (de soma ou atribuição de variável) antes dos números, não haverá soma destes, a menos que estes estejam separados por parênteses.
- Obs.: `var oi = null;`

```javascript
var canal, nome, site; 	// múltipla declaração
ano = 2020; 	// declaração sem var
var saudacao = 'Bom dia'; 	// declaração e atribuição

var texto = canal + '<br>' + (ano + num) + '<br>';
document.write(texto);
```

---

### Aula 003 - Constantes

- Possuem valor fixo ao longo do script
- Tentar atribuir um valor diferente da inicialização dá erro e as linhas posteriores a este não são executadas
  - Como todo erro, dá para ver no console do navegador

```javascript
const fruta = 'banana';
fruta = 'alface'; 	// erro
document.write(fruta);	// não executa a partir daqui
```

- Exemplo de constante: biblioteca Math (iremos estudá-la posteriormente)

```javascript
document.write(Math.PI);
```

---

### Aula 004 - Alert

- Método que vem da classe `window`, mas que pode ser omitida, pois é implícita
  - Lembre-se de que a classe `document` não pode.
- Mesmas regras de concatenação e uso de variáveis que o `document.write();`
- Produz uma caixa de mensagem simples e precisa apenas de um parâmetro string.
- Não vai para o body da página! Não invente de colocar tags. Para quebrar linha: `\n`

```javascript
window.alert('Clique em OK \n\n\npara continuar');

alert(100 + 200 + ' o ');
```

---

### Aula 005 - Prompt

- Caixa de mensagem que permite colher um dado do usuário e armazenar em uma variável. "input text"
- Também da classe window
- O segundo parâmetro é opcional e representa um valor padrão da input box, já vem digitado para o usuário. 
- Assim como no alert, pode-se usar variáveis e concatenações como parâmetros
- Clicar em cancelar faz retornar `null`

```js
var nome = window.prompt("Digite seu nome", "Otávio"); // quando cancela, passa null
document.write(nome);
prompt(texto1, texto2);
```

---

### Aula 006 - Confirm

- Terceiro e último comando de caixa de mensagem. Todos os três são da classe `window`
- A diferença para o alert e prompt é que o confirm exibe dois botôes:
  - Ok - retorna true 
  - Cancelar - retorna false
- Bem parecido com o alert, não tem inputbox. Bom para if/else
- Booleanos: 
  - true: constante pré-definida que possui valor 1; 
  - false: valor 0
- `window.confirm();`

```js
var nome = prompt("Digite seu nome", "nome aqui"); 

var res = confirm(nome + " deseja continuar?"); 

alert(res);

document.write(res); // true
document.write(res + 1); // 2
```

---

### Aula 007 - IF/ELSE

- Já sei isso por outras linguagens de programação, inclusive em JS a sintaxe é idêntica a C# e Java
- <, >, <=, >=, ==, !=
- Única coisa legal: 1 significa true e 0 false
- Para comandos de uma linha não são necessárias chaves

```javascript
if (1) { 	// equivale a if(true)
	document.write("Verdadeiro");
}
```

---

### Aula 008 - And/Or

- || - ou; && - e

```js
if ((pontos >= 70 && pontos <= 80) || (pontos >= 30 && pontos <= 40)) {
```

---

### Aula 009 - IF com múltiplos retornos (ELSE IF)

- && e || são para o mesmo retorno
- É o else if que você já conhece

```javascript
if (teste) {
	// bloco
} else if (teste2) {
	// bloco 2
} else if (teste 3) {
	// bloco 3
} else {
	// bloco 4
}
```

---

### Aula 010 - IF aninhado

- Um IF dentro de outro
- Legal ver o código e comparar com o da aula 9 (mas não é essencial se vc já sabe)

---

### Aula 011 - Blocos de comandos { }

- As chaves são obrigatórias se quiser delimitar **mais de uma instrução de um bloco**

---

### Aula 012 - Switch case

```javascript
switch(pos) {
    case 1: case 2: case 3:
    var msg = "Subiu ao pódio"; break;
    default:
    msg = "Não obteve medalha";
}
document.write(msg);
```

---

### Aula 013 - Array/Vetor

- Método push(): insere na próxima posição do array
- Vetor: array unidimensional - controlado por apenas um índice
- Duas formas de criar:

```javascript
var cor = new Array();
  var carros = [];
```

- Adicionar elementos:

```javascript
cor.push("Preto");
   cor.push("Branco", "Vermelho", "Verde", "Azul");

cor[0] = "Amarelo";
cor[1] = "Azul";
cor[2] = "Rosa";
```

- Criar adicionando itens

```javascript
var pares = [0, 2, 4, '6', 8, 10]; // não é homogêneo
```

- Item de um array como índice de outro array

```js
document.write(itens[mochila[1]]);
```

---

### Aula 014 - Métodos para Arrays (Parte 1)

| Sintaxe                            | O que faz                    |
| ---------------------------------- | ---------------------------- |
| `array,push(elemento)`             | Adiciona item(s) no final    |
| `array.unshift(elemento)`          | Adiciona na primeira posição |
| `array.pop()`                      | Remove no final              |
| `array.shift()`                    | Remove no início             |
| `array.splice(indice, quantidade)` | Remove em qualquer posição   |

---

### Aula 015 - Métodos para Arrays (Parte 2)

