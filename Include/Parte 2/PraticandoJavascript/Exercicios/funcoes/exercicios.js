//Declaração de Função
function calculaPotencia(num, pow){
    let resultado = 1;
    for(let i = 0;i < pow; i++){
        resultado = resultado * num;
    }
    return resultado;
}
//Não é possivel retornar valor de uma variavel local, criad dentro de uma funcao
console.log(calculaPotencia(3,2));
console.log(calculaPotencia(5,2));

//Expressão de Função / Funcao Anonima / ponto e virgula no final recomendado boa pratica
const imprimeOlaMundo = function(){
    console.log(`Ola, Mundo!`);
};
imprimeOlaMundo();

let nome = 'Yan'
//const boasVindas = function(nome) { return `Olá, ${nome}`};
const boasVindas = nome => `olá, ${nome}`; // usando arrow function (utilizada para uma linha)

console.log(boasVindas(nome));

// FATORIAL USANDO EXPRESSAO DE FUNCAO
const fatorial = function f(num){
    if(num === 0 || num === 1) return 1;
    return num * f(num - 1); 
} 
/* FATORIAL USANDO ARROW FUNCTION
const fatorial = (num) => {
    if (num === 0 || num === 1) return 1;
    return num * fatorial(num - 1);    
}
*/
console.log(fatorial(5)); //120

// ARROW FUNCTION funcoes anonimas
const soma1 = (num1, num2) => {
    console.log(num1 + num2);
};

// FUNCAO PRA CALCULAR JUROS COMPOSTOS (recebendo valores inteiros)
// fórmula: valor * (juro elevando ao tempo)
const calculaJuros = (valor, juros, tempo) => {
    let taxaJuros = (juros/100) + 1;
    return valor* Math.pow(taxaJuros, tempo);
}

console.log(calculaJuros(1000,5,2));

// FUNCOES CALLBACK
// Funcoes callback são passadas como argumento de outra funcao, de onde podem receber valores.
// São executadas a partir da função externa.

setTimeout(function() {
    console.log('Ola, mundo do CALLBACK');
}, 2000);

setTimeout(() => console.log('olá, Mundo'), 3000);

//callbaks separadas FUNÇÃO DE ORDEM SUPERIOR ()
setTimeout(exibeFrase, 4000);
function exibeFrase(){
    console.log('Olá, callbaks separada')
}

//PRATICA CALLBACK
function soma(a, b) { return a + b };
function multiplica(a, b) { return a * b};

function calcula(fnOperacao, valorA, valorB){
    return fnOperacao(valorA, valorB);
}

console.log(calcula(soma, 5, 5));
console.log(calcula(multiplica, 5, 5));

//funcao que emite uma mensagem caso nao interaja com sistema por determinado tempo

const userId = '4545656';

const avisaUsuario = userId => console.log(`sessão de ${userId} está inativa!`);
setTimeout(avisaUsuario, 5000, userId);

// OU
//setTimeout((userId) => console.log(`sessão de ${userId} está inativa!`),5000, userId);