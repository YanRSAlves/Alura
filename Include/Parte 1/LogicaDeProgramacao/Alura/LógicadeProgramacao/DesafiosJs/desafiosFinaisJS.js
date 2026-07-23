alert('DESAFIOS FINAIS USANDO JAVASCRIPT');

let nome = 'Yan Rocha';
alert('Olá, ' + nome);

let linguagemPreferida = prompt('Qual a linguagem de programação que você mais gosta?');

let valor1 = 18, valor2 = 20;
let resultadoSoma = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}.`);

//let resultadoSubtracao = Math.abs(valor1 - valor2); //solução mais simples utilizando valor absoluto diferença negativa converte para positivo (simples elegante)
let resultadoSubtracao = valor1 > valor2 ? valor1 - valor2 : valor2 - valor1; //operador ternario na subtracao para sempre ter um valor positivo
console.log(`A subtração de ${valor1} e ${valor2} é igual a ${resultadoSubtracao}.`);

let idade = parseInt(prompt('Digite sua idade e verifique o console'));
if (idade >= 18){
    console.log(`${idade} anos, já pode ser preso.`);
}else{
    console.log(`${idade} anos, não pode ser preso.`);
}

let numero = parseInt(prompt('Digite um numero e verifique o console'));
if(numero < 0){
    console.log(`${numero} é negativo.`);
}else if(numero > 0){
    console.log(`${numero} é positivo.`);
} else{
    console.log(`${numero} é igual a né!`);
}

let inicio = 1, final = 10;
while(inicio <= final){
    console.log(inicio)
    inicio++;
}

let notaAluno = 7;
if(notaAluno >= 7){
    console.log('NOTA >= 7! APROVADO');
}else{
    console.log('Nota baixa! Reprovado!');
}

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 1000) + 1);