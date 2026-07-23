function calculaIMC(altura,peso){
    let imc = peso/(altura*altura);
    return imc;
}

resultadoIMC = calculaIMC(1.75,100);
console.log(`IMC = ${resultadoIMC}`);

function calcularFatorial(numero){
    if (numero === 0 || numero === 1){
        return 1;
    }

    let fatorial = 1;
    for(let i = 2; i<=numero; i++){
        fatorial *= i;
    }

    return fatorial;
}

let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

function converterDolarParaReal(dolar) {
    let cotacao = 4.80;
    return dolar * cotacao;
}

let dolares = 10;
let reais = converterDolarParaReal(dolares);
console.log(`$${dolares} em dolares é igual a R$${reais} reais`);

function calcularSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log("Área da Sala:", area, " metros quadrados");
    console.log("Perímetro da Sala:", perimetro, " metros");
}
let altura = 3;
let largura = 5;
calcularSalaRetangular(altura, largura);

function calcularSalaCircular(raio) {
    let pi = 3.14;

    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;

    console.log("Área da sala circular:", area, " metros quadrados");
    console.log("Perímetro da sala circular:", perimetro, " metros");
}
let raio = 4;
calcularSalaCircular(raio);

function tabuada(numero) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
let tabuadaDoNumero = 7;
tabuada(tabuadaDoNumero);