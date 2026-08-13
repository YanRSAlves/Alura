function olaMundo(){
    console.log('Olá, Mundo!');
}

function olaMundoUsuario(usuario){
    console.log(`Olá, ${usuario}!`);
}

function dobraNum(numero){
    let dobroNum = 2*numero;
    console.log(`O dobro de ${numero} é ${dobroNum}.`);
}

function media3numeros(numero1, numero2, numero3){
    let soma3Numeros = numero1 + numero2 + numero3;
    let media3Numeros = soma3Numeros/3;
    console.log(`A soma desses 3 numeros é igual a ${soma3Numeros}!`);
    console.log(`A média desses 3 numeros é igual a ${media3Numeros}!`);
}

function maiorNumero(Num1,Num2){
    if(Num1 > Num2){
        console.log(`O numero ${Num1} é maior que ${Num2}.`);
    }else if(Num1 < Num2){
        console.log(`O numero ${Num2} é maior que ${Num1}.`);
    }else{
        console.log(`O numero ${Num1} e ${Num2} são iguais.`);
    }
}

function numeroQuadrado(num){
    return num*num;
}

olaMundo();

let nomeUser = 'Yan';
olaMundoUsuario(nomeUser);

let numero01 = 10;
dobraNum(numero01);

let num1 = 4,num2 = 6, num3 = 8;
media3numeros(num1,num2,num3);

let numero11 = 200, numero22 = 200;
console.log(Math.max(numero11, numero22));
maiorNumero(numero11,numero22);

let numero99 = 9;
let resultadoQuadrado = numeroQuadrado(numero99);
console.log(`O quadrado de ${numero99} é ${resultadoQuadrado}.`);