// ctrl + alt + n: run
console.log('Teste');

// Organização do código
// sentenças de código que pode terminar com ; ou não
// var, let e const
// Não posso redeclarar variável com mesmo nome no mesmo escopo. O exemplo a seguir deve dar erro.
console.log('----- Declarando uma variável--------------------------------------');
var a = 3; // escopo global
let b = 4; // escopo local
var a = 30;
//let b = 40;
//console(a, b);
// constantes não podem ter seu valor modificado
// constantes e variáveis declaradas com let não vão para window
const c = 5;
// c = 50; // essa atribuição dá erro assignment to constant variable
// tipagem fraca

console.log('----- Usando let, var e const em bloco --------------------------------------');
// usando var, let e const

// var ou é global ou possui escopo de função
// let tem escopo de bloco

var numero = 1;
{
    let numero = 2;
    console.log('dentro=', numero); // imprime 2 porque let tem escopo de bloco, função e global. Se fosse var modificaria a global e imprimiria 2 duas vezes
}
console.log('fora=' + numero); // imprime 1

console.log('----- Tipo number--------------------------------------');
// Tipo number
const peso1 = 10;
const peso2 = Number('2.0');
console.log(peso1, peso2); // 10 2
console.log(Number.isInteger(peso1)); //true
console.log(typeof peso1); //number
console.log(7 / 0); //Javascript tem o tipo Infinity para se referir a divisão por zero. Imprime: Infinity
console.log("10" / 2); // O resultado dessa sentença é 5 porque js é fracamente tipada, ela faz a coerção de tipo.
console.log("Show!" * 2); // imprime NaN
console.log(0.1 + 0.7); //essa soma não dá 0,8 devido o tipo da precisão de ponto flutuante que o js suporta. Dá 0.79999999
console.log((0.1 + 0.7).toFixed(2)); //agora sim, imprime 0.8

console.log('----- Usando o objeto Math--------------------------------------');

// usando o objeto Math
console.log(typeof Math);// imprime object
const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);
console.log(area); // imprime 98.5203456165759

console.log('----- Usando strings--------------------------------------');
// usando o tipo string, pode ser delimitada por aspas simples, duplas e crase (template strings)

const escola = "Cod3r";
console.log(escola.charAt(4)); // imprime: r
console.log(escola.substring(1)); //pega a string começando de 1. imprime: od3r
console.log(escola.substring(0, 3)); //pega a string começando de 0 até 3, sem incluir 3. Imprime: Cod
console.log('Escola '.concat(escola).concat("!")); //imprime: Escola Cod3r!
console.log(escola.replace(3, 'e'));// imprime: Coder
console.log('Ana, Maria, Pedro'.split(',')); // split converte a entrada em um array de acordo com o separador especificado. [ 'Ana', ' Maria', ' Pedro' ]

console.log('----- Template Strings--------------------------------------');
// adição feita ao ECMA 2015 - template strings
const nome0 = 'Rebeca';
const concatenacao = 'Olá' + nome0 + '!';
const template = `Olá 
                  ${nome0}!`; // essa template string inclui a fortmatação na impressão.
console.log(concatenacao, template);
console.log(`1+1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();

console.log(`Ei... ${up('cuidado')}`);

console.log('----- Tipo booleano--------------------------------------');
// Tipo boolean 

let isAtivo = false;
isAtivo = 1;
console.log(!!isAtivo);
// todos os numeros inteiros são verdadeiros com exceção do zero. A seguir valores considerados como verdadeiro
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

// os casos a seguir resolvem para false
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

const teste = 'as';

if (teste) {
    console.log('é true');
} else {
    console.log('é false');
}

console.log('----- Usando arrays --------------------------------------');
// Array em JS
const valores = [1, 2]
console.log(valores[0], valores[1], valores[3]); //acessar indice fora do array dá undefined
valores[10] = 10; //insere na posição 10
valores.push({ id: 3 });// insere elementos no array
console.log(valores);
valores.pop();// remove último elemento do array
console.log(valores);
delete valores[0];
console.log(valores);
valores.shift(2);// remove primeiro elemento do array
console.log(valores);
valores.unshift(2);// insere elemento no início do array
console.log(valores);
valores.slice(0, 1); // remove elemento em um posição específica, 0 posição e 1 quantas posições a partir de zero devem ser excluídas

console.log('----- Introdução a objetos --------------------------------------');
// a linguagem é multiparadigma - Orientação a Objetos
const prod1 = {}
prod1.nome = 'Ceular Ultra Mega'
prod1.preco = 48.5
console.log(prod1);

// se eu utilizar dois idenficadores de atributos iguais, o JS pega o último
const prod2 = {
    nome: 'Teste',
    nome: "Teste 2"
}
console.log(prod2);

console.log('----- Cópia por valor VS cópia por referência --------------------------------------');
// declaração de váriável no javascript, ao mudar a variável d, muda-se a variável a. É uma refererência, mas não funciona para valores primitivos. 
var a = { nome: 'Elias Adriano' }
var d = a; // cópia por referência
d.nome = "Jaquim José"
console.log(a); // d muda a

var e = 3;
var f = 3;
f = 4; // cópia feita por valor
console.log(e); // imprime 3, não 4. Diferentemente do exemplo anterior, ao se trabalhar com tipos primitívos é feita uma cópia por valor.

console.log('----- Null e undefined --------------------------------------');
// null e undefined

let valor0;
console.log(valor0); // deve imprimir undefined, não foi atribuído nada e variável não foi inicializada.

let valor = null; // null é ausência de valor, a variável não aponta para nenhum valor.
console.log(valor);

console.log('----- Usando funções --------------------------------------');

// quase tudo é função
console.log(typeof Object);// imprime function

class Produto { }
console.log(typeof Produto);// imprime function - até o object é uma função

// função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // vai imprimir NaN. O JS vai permitir essa chamada. Ele não vai verificar a quantidade de parâmetros.
imprimirSoma(2, 4, 5); // vai imprimir 6. O JS vai permitir essa chamada. Ele não vai verificar a quantidade de parâmetros.

// função com retorno

function soma(a, b = 0) { // está usando valor default. Se nada for passado, b = 0
    return a + b;
}

console.log(soma(5, 2)); //imprime 7
console.log(soma(5)); //imprime 5

console.log('----- Armazenando uma função em um variável --------------------------------------');
// Armazenando uma função em uma variável

const imprimirSoma2 = function (a, b) {
    console.log(a + b);
};

imprimirSoma2(2, 3); // imprime 5

console.log('----- Usando arrow functions --------------------------------------');
//Arrow function 

const soma2 = (a, b) => {
    return a + b;
};

console.log(soma2(5, 6));

// usando retorno implícito

const subtracao = (a, b) => a - b; // o retorno implícito serve apenas para funções de uma unica linha.
console.log(subtracao(10, 3));

console.log('----- Usando var em loop --------------------------------------');
// usando var em loop

for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i); // i existe aqui fora do laço porque foi declarado com var, se fosse usado let não estaria diponível aqui.


// exemplo de um problema de fazer laço com var
const funcs = [];
for (var j = 0; j < 10; j++) {
    funcs.push(function () {
        console.log(j);
    });
}

funcs[2]();
funcs[8]();

console.log('----- Usando let em loop --------------------------------------');
//usando let em loop 
const funcs2 = [];

for (let k = 0; k < 10; k++) {
    funcs2.push(
        function () {
            console.log(k);
        }
    );
}

funcs2[2]();
funcs2[8]();

console.log('----- Entendendo o hoisting --------------------------------------');
// hoisting: em javascript uma variável pode ser declarada depois de ser usada. Em outras palavras, uma variável pode ser usada antes de ser declarada.

console.log('ab=', ab);
var ab = 2; // como ab foi declara com var acontece o hoisting, ou seja, o console.log acima vai imprimir undefined e não vai dar erro. Se eu comentar essa linha dá um referenceerror.
console.log('ab=', ab); //o hoisting acorre também dentro de uma funçaõ.

// o hoisting não aocorre com let

//console.log('ac=',ac); // aqui vai dar um erro ReferenceError: ac is not defined e não undefined como no caso acima.
let ac = 10;
console.log('ac=', ac);

console.log('----- Função vs objeto --------------------------------------');

console.log(typeof Object); //imprime funcion
console.log(typeof new Object); //imprime object

const Cliente = function () { };
console.log(typeof new Cliente);
console.log(typeof Cliente);

class Produto2 { }; // permitido a partir da ecma 2015 (ES6). Uma classe em EC6 é apenas uma açucar sintático od EC, por trás está declarando uma função.
console.log(typeof Produto2);
console.log(typeof new Produto2);

console.log('----- Par nome/valor --------------------------------------');
const saudacao = 'Opa'; //contexto/escopo léxico 1

function exec() {
    const saudacao = 'Fala'; // contexto/escopo léxico 2
    return saudacao;
}

// em JS, Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua A',
        numero: 123
    }
};

console.log(saudacao);
console.log(exec());
console.log(cliente);

console.log('----- Notação ponto/acessando membros de uma classe --------------------------------------');

const any = {};
any.nome = 'bola';
//obj1['nome'] = 'bola' // equivalente a linha superior, utilizar prioritariamente para ler atributos.
console.log(any)

console.log('----- Operadores de atribuição --------------------------------------');

const bc = 7
const bd = 3
b += a
b -= 4
b *= 2
b /= 2
b %= 2

console.log('----- Operadores destructing ES2015 (desestruturação - tira da estrutura algo) --------------------------------------');

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        num: 12
    }
};

const { nome, idade } = pessoa; // forma de instanciar diretamente nome e idade a partir de pessoa.
console.log(nome);
console.log(idade);

//outra forma de usar, extraindo nome e idade e criando as novas variáveis n, i respectivamente
const { nome: no, idade: id } = pessoa;
console.log(no, id);

// Teste  = tentando tirar um atributo que não existe. Sobrenome virá undefined e bemHumorada utiliza valor default, se nao existir atribui true.
const { sobrenome, bemHumarada = true } = pessoa;
console.log(sobrenome, bemHumarada);

// Para pegar os atributos logradouro e numero do objeto pessoa

const { endereco: { logradouro, num, cep } } = pessoa; // não vai criar a variável endereço, apenas as variáveis internas. Para criar endereço é preciso fazer destructing diretamente nela
console.log(logradouro, numero, cep); // ao desestruturar um dado que está aninhado, é preciso ter certeza que o caminho até o dado existe


console.log('----- Operadores destructing ES2015 com arrays --------------------------------------');

const [ad] = [10];
console.log(ad);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota);

console.log('----- Operadores aritiméticos --------------------------------------');
// +, -, *, /, %

console.log('----- Operadores relacionais --------------------------------------');

console.log('01)', '1' == 1); // imprime true porque se está comparando o valor
console.log('02)', '1' === 1); //imprime false porque se está comparando tipo e valor
console.log('03)', '3' != 3); //imprime false porque se está comparando tipo e valor
console.log('04)', '3' !== 3); //imprime true porque se perguntou se 3 era estritamente diferente

const d1 = new Date(0); //data zero pega o marco inicial da linguagem 01/01/1970
const d2 = new Date(0); //data zero pega o marco inicial da linguagem 01/01/1970

console.log('05)', d1 === d2); //imprime false porque se compara a referência de memória
console.log('06)', d1 == d2); //imprime false porque se compara a referência de memória
console.log('07)', d1.getTime() === d2.getTime()); //imprime true porque se compara o retorno - mesmo tipo e mesmo valor
console.log('08)', undefined == null); //imprime true 
console.log('09)', undefined === null); //imprime false 

console.log('----- Operadores lógicos --------------------------------------');
// ||, &&, !, !=
// simulação de operador ou-exclusivo !!(trabalho1 ^ trabalho2) // bitwise xor
// Recurso novo da ECMA6 return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel} // a ecma possibilita a acriação direta dos objetos assim.

console.log('----- Operadores unários --------------------------------------');
// ++, --, !
console.log('----- Operadores ternários --------------------------------------');
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(7.1));


console.log('----- Trantamento de exceção --------------------------------------');

function tratarErroELancar(erro) {
    // throw pode ser lançado com qualquer outro tipo
    // throw 10
    // throw true
    // throw  'mensagem'
    throw new Error('Aconteceu um erro, verifique os parâmetros passados');
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!');
    } catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log('Finally executa de todo modo.');
    }
}

const obj3 = { nome: 'Joaquim Costa e Silva' };
imprimirNomeGritado(obj3);

console.log('----- Estruturas de controle --------------------------------------');
// if, else

const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!');
    } else {
        console.log('Reprovado!');
    }
};

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!'); //Muita atenção aqui. A função imprimirá REPROVADO porque como JS é fracamente tipado, o if nota>=7 vai falhar e vai entrar no else;

// simulando elif com if else

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirParecer = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro honra!');
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado!');
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação!');
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado!');
    } else {
        console.log('Nota inválida!');
    }
}

imprimirParecer(10);
imprimirParecer(8.9);
imprimirParecer(6.55);
imprimirParecer(2.3);
imprimirParecer(-1);
imprimirParecer(11);


var expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

console.log('----- Funções --------------------------------------');
//JS trata funções como first line citizens
//Higher order function 

// Criar a função de forma literal

function func1() {
    // o retorno de um função em js é opcional, caso não seja passado nada, o JS retorna undefined 
}

// Armazenar a função em uma variável

const fun2 = function () { };

//Armazenar em um array
const array = [function (a, b) { return a + b }, func1, fun2];

console.log(array[0](2, 3));

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' };
console.log(obj.falar());

// passar função como parâmetro

function run(fun) {
    fun();
}

run(function () { console.log('Executando'); })

// Uma função pode retornar/conter uma função
function soma3(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma3(2, 3)(5);

// parâmetros e retorno em JS são optcionais. Inclusive, se eu fizer uma função com 2 parâmetros, posso passar 1 ou 3

function area2(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido:${area}`);
    } else {
        return area;
    }
}

console.log(area2(2, 2));
console.log(area2(2));
console.log(area2());
console.log(area2(2, 3, 4));
console.log(area2(5, 5));

// número de parâmetros variáveis - a palavra arguments se refere a um array implicito contendo os atributos da função.

function soma4() {
    let somar = 0;
    for (p in arguments) { //todas as funções têm esse array interno, contém todos os parâmetros da função
        somar += arguments[p];
    }
    return somar;
}

console.log(soma4());
console.log(soma4(1));
console.log(soma4(1.1, 2.2, 3.3));
console.log(soma4(1.1, 2.2, 3.3, 'Teste'));//fracamente tipada, não verifica o tipo na passagem de parâmetros

// Parâmetro padrão - estratégia 1 - estratégia ruim porque 0 quebra a função

function soma5(a, b, c) {
    a = a || 1; // recebe a, se a não for passado atribui 1
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma5()); //imprime 3
console.log(soma5(1, 2)); //imprime 4
console.log(soma5(1, 2, 3));// imprime 6
console.log(soma5(0, 0, 0));// imprime 3 porque no ou zero retorna falso e é atribuído o valor padrão. 0 quebra a função.

// Parâmetro padrão - estratégia 2, 3, 4

function soma6(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c; //imprime 3
    return a + b + c
}

console.log(soma6()); //imprime 3
console.log(soma6(1, 2)); //imprime 4
console.log(soma6(1, 2, 3));// imprime 6
console.log(soma6(0, 0, 0)); //imprime 0

// parâmetro padrão do ES2015

function soma7(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma7()); //imprime 3
console.log(soma7(1, 2)); //imprime 4
console.log(soma7(1, 2, 3));// imprime 6
console.log(soma7(0, 0, 0)); //imprime 0

// Há dois grandes motivos para criação de arrow functions
// 1 - diminuição da sintaxe
// 2 - nas arrow function os this não varia

console.log('----- this --------------------------------------');

console.log(this); //o this varia conforme o contexto de execução, não na arrow function

const person = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}

person.falar()
const falar = person.falar;
falar(); // imprime undefined pois há um conflito, o js não sabe resolver this. 

const falarDePessoa = person.falar.bind(person);
falarDePessoa();//imprime normalmente porque a função bind informa que se refere a saudação de pessoa. Amarra o this ao objeto passado.

// continuação de bind - apontar this para uma constante. 

// function Person(){
//     this.idade = 0;
//     const self = this; // uma outra solução para chamar a função.

//     setInterval(function (){ //Quem está invocando essa função? não há (), não é Person que invoca, mas um temporizador interno da função builtin imprime NaN a cada 1s
//         self.idade++; // em vez de usar o this, usa self;
//         //this.idade++;
//         console.log(self.idade);
//         //console.log(this.idade);
//     }/*.bind(this)*/, 1000); //para resolver o problema e a função encontrar o this foi necessário adicionar o bind
// }

// new Person ();

console.log('----- Arrow functions --------------------------------------');

// ser mais curta e acabar com o problema do this. Sempre pega o this associado ao contexto no qual a função foi escrita;[

// função atribuída

let dobro = function (a) {
    return 2 * a
}

// arrow function 01

let triplo = (a) => {
    return 3 * a;
}

let quadruplo = a => 3 * a;

console.log(dobro(2));
console.log(triplo(2));
console.log(quadruplo(2));

ola = () => 'Olá';
console.log(ola());

// função arrow 02 - questão do this. Objeto pessoa contendo a função setInterval, mas agora escrita com arrow function 

// function Person(){
//     this.idade = 0;
//     setInterval(()=>{ // com a arrow function a função tem escopo léxico, o this sempre vai apontar para Person
//         this.idade++; // o this não varia conforme quem chama a função
//         console.log(this.idade);
//     },1000);
// }
// new Person();


let comparaComThis = function (param) {
    console.log(this === param);
}

comparaComThis('global?', global); //global, no js, é equivalente ao window; 

let comparaComThisArrow = param => console.log(this === param);

const obj4 = {}
comparaComThis.bind(obj4);
comparaComThis('obj4', obj4);

comparaComThisArrow('Arrow global?', global); //o this não aponta para o global na arrow function;
comparaComThisArrow('module.exports', module.exports); //o this não aponta para o global na arrow function;

// fazendo teste, tentando usar bind para mudar o this na arrow function
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); // imprime false -- ou seja, na arrow function o bind não muda a variável
comparaComThisArrow(module.exports); //imprime true


console.log('----- Funções anônimas --------------------------------------');

const somar = function (x, y) { // função anônima atribuída a uma variável
    return x + y;
};

const subtrair = function (x, y) {
    return x - y;
}

const imprimirResultado1 = function (a, b, operacao = somar) { // função sendo passada como parâmetro e usando valor default da ES6
    console.log(operacao(a, b)); //função anônima sendo invocada. Atenão a essa invocação devido a tipagem fraca do JS
}

imprimirResultado1(3, 4);
imprimirResultado1(3, 4, somar);
imprimirResultado1(3, 4, subtrair);
imprimirResultado1(3, 4, function (x, y) {
    return x * y;
});
imprimirResultado1(3, 4, (x, y) => x / y);


console.log('----- Funções callback --------------------------------------');
// Callback - chamará de volta

const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir2(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir2);
fabricantes.forEach(function (valor, indice, array) {
    console.log('teste==>', valor, indice, array);
});
//transformando a função anônima do callback acima em arrow function
fabricantes.forEach(elemento => console.log('arrow =>', elemento));

let alunos = ["João", "Maria", "José", "Thiago"]

alunos.forEach(function (aluno) {
    console.log('aluno:', aluno);
});

console.log('----- callback vs sem callback --------------------------------------');
// diferença entre uso de callback e não uso de callback - Problema: imprimir todas as notas menores que 7
let notas = [7.5, 5.2, 8.9, 4.1, 9.0];
// sem callback - 1- instanciar um novo array
let notasBaixas = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}
console.log('sem callback', notasBaixas);

// com callback
notasBaixas = [];
notas.forEach(a => {
    if (a < 7) {
        notasBaixas.push(a);
    }
});
console.log('callback com arrow =>', notasBaixas);

// outra opção - utilização de filter - filter vai filtrar os elementos de um array conforme um determinado critério
notasBaixas = notas.filter(n => n < 7); //filter deve receber um callback que testa se uma condição é true ou false; filter não altera o array original
console.log('usando filter com arrow =>', notasBaixas);

//usando uma callback mais verbosa
notasBaixas = notas.filter(function (n) { return n < 7 });//Atenção! Filter não altera o array original.
console.log('callback com função anônima e filter', notasBaixas);

notas = notas.filter(n => n < 7);
console.log('subst. notas:', notas);

console.log('----- Funções construtoras --------------------------------------');

function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0;

    // metodo publico

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    };

    // metodo público

    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    };

}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);

console.log('----- Tipos de declarações de função--------------------');

// function declaration - tradicional

function soma(a, b) { //vantagem: o loader carrega antes, permite hoisting, ou usar antes no código
    return a + b;
};

// function expression - função anônima em uma variável

const sub = function (x , y){ //não permite hoisting, ou seja, não permite chamar antes - não sei se pra função chama hoisting... ;)
    return x - y;
};

// named function expression - constante + named funcion

//não permite hoisting, ou seja, não permite chamar antes - não sei se pra função chama hoisting... ;)
const m = function mult(x, y){ //única vantagem é que no stracktrace/debug o nome da função vai aparecer em vez de uma anônima.
    return x * y;
};

const valorGlobal = 'Global';

function minhaFuncao(){
    let valorLocal = 0;
    console.log(valorGlobal);
}

function exec(){
    const valorLocal = 'Local';
    minhaFuncao();
}

exec(); // imprime Global devido contexto léxico

console.log('----- Closures --------------------');

// Closure é o escopo criado quando uma função é declarada.
// Esse escopo permite a função acessar e manipular variáveis externas à função


const x = 'Global'; 

function fora () {
    const x  = 'Local';
    function dentro(){
        return x;
    }
    return dentro;
}

const minhaFuncaoClosure = fora();
console.log(minhaFuncaoClosure()); //imprime local 

console.log('----- Outro exemplo de Closures --------------------');

var add = (function (){
    var counter = 0;
    return function (){
        counter += 1;
        return counter;
    }
})();

add();
add();
console.log(add()); //imprime 3; a função guarda o contexto no qual ela está.

//uma função factory é uma função que retorna um objeto

// factory simples retornando um objeto único.

function criarPessoa (){
    return {
        nome : 'Ana',
        sobrenome: 'Moreira'
    }
};

console.log(criarPessoa());

function criarProduto(nome, preco){
    return {'nome':nome, 'preco': preco};
}

console.log(criarProduto('Caneta', 10));

// IIFE - Immediately Invoked Function Expression

(function(){
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente!');// Ou seja, tudo que for criado estará dentro do contexto da função
})();

// uma função em JS é um tipo, como um tipo ele tem outras funções dentro dele
// a diferença entre call e apply é justamente a forma como se passa os parâmetros na hora de invocar a função


// primeiramente será feito um exemplo de chamamento de função da maneira tradicional.
function getPreco(imposto = 0, moeda= 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}


global.preco = 20;
global.desc = 0.1;
console.log(getPreco()); // imprime 18 porque nesse momento os atributos internos de getPreco inda não foram definidos. Então usa os atributos definidos como global

console.log(produto.getPreco()); // executa corretamente com os dados do produto

// Usando call e apply
const carro = {preco: 49990, desc: 0.20};

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, '$'));// posso passar também os parâmetros separados. onde carro é o contexto

console.log(getPreco.apply(carro, [0.17, '$'])); // para apply usa-se um array
console.log(getPreco.apply(global, [0.17, '$'])); // para apply usa-se um array


// Código não executável, apenas para mostrar os conceitos
// um objeto em JS é uma coleção dinâmica de chaves e valores de qualquer tipo de dado
// é possível adicionar ou remover propriedades a qualquer momento

// criando object
const pessoa = {};
console.log(typeof pessoa, pessoa);// imprime object {}

// declarando pessoa com propriedade

var pessoa1 = {
    nome: 'João'
};
console.log(typeof pessoa1, pessoa1); //imprime object {nome: 'João'}

// adicionando propriedades após o objeto ser criado

pessoa.nome = 'Adriano'; 
console.log(typeof pessoa, pessoa);// imprime object {nome : 'Adriano'}
pessoa['endereco'] = 'rua A';
console.log(typeof pessoa, pessoa);// imprime object { nome: 'Adriano', endereco: 'rua A' }


// Estratégias de criação de objetos

// Forma 1: usando a notação literal, não confundir com json

const obj1 = {};
console.log(obj1);

//Forma 2: usando object
console.log(typeof Object); // é possível perceber que Object é um function. imprime function
console.log(typeof new Object);// imprime object

// Forma 3: funções construtoras

function Produto(nome, preco, desc){
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    };
}

const p1 = new Produto('Caneta', 7.99, 0.15);
console.log(p1.nome); // imprime Caneta
console.log(p1.preco);// imprime undefined, preco não está diponível para acesso fora da função tal como nome
console.log(p1.getPrecoComDesconto());// imprime 6.7915

// Forma 4: Função Factory - uma função que fabrica um objeto

function criarFuncionario(nome, salario, faltas){
    return {
        nome, salario, faltas, 
        getSalario(){
            return (salario/30)*(30 - faltas);
        }
    };    
}

const func1 = criarFuncionario('Joao', 7980, 4);
const func2 = criarFuncionario('Maria', 11400, 1);

console.log(func1.getSalario(), func2.getSalario());

// Forma 5: Object.create
 const filha = Object.create(null);
 filha.nome = 'Ana';
 console.log(filha);

 //Uma função famosa que retorna Objeto
 const fromJSON = JSON.parse('{"nome" : "Ana", "sobrenome" : "Moreira"}');
 console.log(fromJSON);
 console.log(fromJSON.sobrenome);

 Object.freeze(filha); //"congela" o objeto

filha.nome = 'Mariana';
console.log(filha); // imprime { nome: 'Ana' }


const a = 1
const b = 2
const c = 3

const obj2 = {a, b, c}; //notação atual. Automaticamente, o nome do atributo será o passado.
const obj3 = {a: a, b: b, c: c}; //notação antiga

console.log(obj2);
console.log(obj3);

const obj5 = {
    funcao1 : function () { // jeito antigo, era necessário : e function. Foi simplificado para o jeito a seguir
        return 'Funcao 1';
    },
    funcao2 () {
        return 'Funcao 2'; // jeito reduzido, adicionado no ES2015
    }
}

console.log(obj5);

// a versão antiga possibilitava criar obj6 com variáveis previamente declaradas.

nomeAttr = 'nota';
valorAttr = 7.87;
const obj6 = {};
obj6[nomeAttr] = valorAttr;
console.log(obj6);

// a versão nova suporta a seguinte constução direta
const obj7 = {[nomeAttr]:valorAttr};
console.log(obj7);


const sequencia = {
    _valor: 1, //uderline é uma convenção para dizer que a variável é privada.

    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor;
        }
    }

};

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);

const pessoa = {
    nome: 'Rebeca',
    idade:2, 
    peso: 13
};

console.log(Object.keys(pessoa)); // retorna array [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)); // [ 'Rebeca', 2, 13 ]
console.log(Object.entries(pessoa)); //[[ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ]]

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
});

console.log(pessoa);

//Object.assign (ECMA 2015)

const dest = {a : 1};
const o1 = {b : 2};
const o2 = {c: 3, a : 4};
const obj = Object.assign(dest, o1, o2);
console.log(obj);

// aula 01 prototype

// em JS só há herança simples

const ferrari = {
    modelo: 'F40',
    velMax: 324
};

const volvo = {
    modelo: 'V40',
    velMax: 200
};

console.log(ferrari.__proto__);
console.log(volvo.__proto__);
console.log(volvo.__proto__ === Object.prototype); //true
console.log(Object.prototype.__proto__); //null
console.log(Object.prototype.__proto__===null); //null

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, Object.__proto__);

// aula 02 - cadeia de protótipos (prototype chain) 

Object.prototype.attr0 = 'Z'; //não devemos fazer isso

const avo = {attr1 : 'A'};
const pai = {__proto__:avo, attr2: 'B' }
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1, filho.attr0, filho.attr4);

const carro = {
    velAtual: 0,
    velMax: 200,
    acerelaMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta;
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`;
    }
};

const lamborguini = {
    modelo: 'L40',
    velMax: 324 
};

const volks = {
    modelo: 'V40', 
    status(){
       return `${this.modelo} : ${super.status()}`;
    }
};

Object.setPrototypeOf(lamborguini, carro); //lamborguini tem carro como seu protótipo
Object.setPrototypeOf(volks, carro); //lamborguini tem carro como seu protótipo

console.log(lamborguini);
console.log(volks);

lamborguini.acerelaMais(300);
console.log(lamborguini.status());

volks.acerelaMais(300);
console.log(volks.status());


const pai = { nome: 'Pedro', corCabelo: 'preto' };

const filha1 = Object.create(pai);

filha1.nome = 'Ana';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, { nome: { value: 'Bia', writable: false, enumerable: true } });
console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);;
}

function MeuObjeto() {

}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__, obj1.__proto__); //apontam para o mesmo prototype

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function (){
    console.log(`Bom dia meu nome é ${this.nome}!`);
}

obj1.falar();
obj2.nome = 'Rafael';
obj2.falar();

// Resumo da ópera

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);


// Elementos de Javascript

console.log(typeof String);// função
console.log(typeof Array); // função
console.log(typeof Object); // função

String.prototype.reverse = function (){
    return this.split('').reverse().join('');
}
console.log('Universidade de São Paulo'.reverse());

Array.prototype.first = function(){
    return this[0];
}
let a = ['Vasco', 'Flamengo']
console.log(a.first());

// array em JS na verdade é um objeto, não há um tipo de dados array (internamente)
console.log(typeof Array, typeof new Array(), typeof []); //function object object


let aprovados = new Array('Bia', 'Carlos', 'Ana'); //forma não muito usual
console.log(aprovados);

//notação literal - recomendada

aprovados = ['Bia', 'Ana', 'Carlos'];
console.log(aprovados[0]);
console.log(aprovados[0]);
console.log(aprovados[0]);
console.log(aprovados[3]); //undefined
aprovados[3] = 'Paulo';
aprovados.push('Carla');
console.log(aprovados.length);
console.log(aprovados);
aprovados[9] = 'Rafael';
console.log(aprovados);
console.log(aprovados[8] === undefined); //true

//ordenando
aprovados.sort(); //modifica o array, ordenando-o
console.log(aprovados);

//excluindo elemento

delete aprovados[1]; //deleta, mas não reordena
console.log(aprovados);

// splice tanto adiciona elementos em um determinado índice, como remove, como remove e add ao mesmo tempo
aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1); //a partir do 1 exclui 1 elemento
console.log(aprovados); // [ 'Bia', 'Ana' ]

// a partir do indice 0, exclui 2 elementos e adiciona mais 2
aprovados.splice(0, 2, 'Marcos', 'Kleber');
console.log(aprovados); // [ 'Marcos', 'Kleber' ]

// a partir do índice 1, não exclui ninguem, mas insere Aline e Carlos e joga Kleber pro fim
aprovados.splice(1, 0, 'Aline', 'Carlos');
console.log(aprovados);

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

pilotos.pop(); // retira elemento do fim
console.log(pilotos);

pilotos.push('Verstappen'); //insere no fim
console.log(pilotos);

pilotos.shift(); //remove primeiro elemento
console.log(pilotos);

pilotos.unshift('Hamilton'); //insere no início
console.log(pilotos);


// adicionando com splice
pilotos.splice(2, 0, 'Bottas', 'Massa'); //adiciona Bottas e Massa no índice 2 e não remove ninguém
console.log(pilotos);

// slice retorna um novo array
const algunsPilotos1 = pilotos.slice(2); // a partir do 2 retorna novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // a partir do 2 retorna novo array indo até o 4, sem o 4
console.log(algunsPilotos2);

// simulando array com objeto

const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' };
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
});

console.log(quaseArray[0]);
console.log(quaseArray.toString());

// foreach 

aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nomeDoAprovado, indice, array) { //passa uma callback com valor, índice, array
    console.log(`${indice + 1}) ${nomeDoAprovado}`, array);
});

//forEach com arrow function
aprovados.forEach(nome => console.log(nome));

// forEach com arrow e função não declarada na assinatura
const exibirAprovado = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovado);


// forEach: implementando por dentro

aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

//implementando um forEach que foi denominado forEach2
Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

aprovados.forEach2(function (nomeDoAprovado, indice, array) { //passa uma callback com valor, índice, array
    console.log(`${indice + 1}) ${nomeDoAprovado}`, array);
});

// Map: server para fazer uma transformação no array
// Mapear um array para outro array do mesmo tamanho, mas com dados transformados.
// Map não causa modificação no array atual.

const nums = [1, 2, 3, 4, 5];

let resultado = nums.map(function (value, index, array) {
    return value * 2
});
console.log(nums);
console.log(resultado);

const soma10 = e => e + 10
console.log(nums.map(soma10));

const toReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
console.log(nums.map(toReal));
console.log(nums.map(soma10).map(toReal));

// exercicio: receber um array de objetos em JSON e retornar um novo array apenas com preço
const carrinho = [
    '{"nome" : "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
];

const precos = carrinho.map(e => JSON.parse(e).preco);// usar "ducktype" não é recomendado
console.log(precos);

// implementando o map
Array.prototype.map2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));//elemento, índice, array atual
    }
    return newArray;
}

const precos2 = carrinho.map2(e => JSON.parse(e).preco);// usar "ducktype" não é recomendado
console.log('map2', precos);

// filter - filtra um array - filtra e retorn um novo array

Array.prototype.filter2 = function(callback){
    let temp = [];
    for(let i=0; i<this.length; i++){
        if(callback(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    return temp;
};



const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false },
];

console.log(produtos.filter(function (produto) {
    return produto.preco < 1000;
}));

console.log(produtos.filter(function (produto) {
    return produto.fragil; //retorna apenas produtos frágeis
}));


// reduce é uma função que serve para transformar um array em um elemento
// o reduce pegaos dois primeiros elementos do array na callback e vai percorrendo o array accumulando o resultado da callback

// array.reduce(callback, valorInicial)

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
];

console.log(alunos.map(a => a.nota));

let resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
}, 1); // é possível passar um valor inicial, se não for passado o reduce pega os 2 primeiros elementos do array
console.log(resultado);

// Desafio 1: todos os alunos são bolsistas?

resultado = alunos.map(a => a.bolsista).reduce(function (acumulador, atual) {
    return acumulador && atual;
});
console.log('Todos são bolsistas?', resultado);

// Desafio 2: algum aluno é bolsista?

resultado = alunos.map(a => a.bolsista).reduce(function (acumulador, atual) {
    return acumulador || atual;
});

console.log('Algum aluno é bolsista?', resultado);

// implementação com arrow
resultado = alunos.map(a => a.bolsista).reduce((acumulador, atual) => acumulador || atual);
console.log('com arrow:', resultado);


/// implementando um reduce simplificado
Array.prototype.reduce2 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1;
    let acumulador = valorInicial || this[0];
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }
    return acumulador;
};
const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce2(soma, 9));

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
];


// imperativo 
let total1 = 0;

for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length);

//Declarativo
const total2 = alunos.map(aluno => aluno.nota).reduce((total, atual) => total + atual);
console.log(total2);

const filhas = ['Valeska', 'Joice'];
const filhos = ['Tom', 'Arnaldo'];

const todos = filhas.concat(filhos); // concatena 2 arrays
console.log(todos);