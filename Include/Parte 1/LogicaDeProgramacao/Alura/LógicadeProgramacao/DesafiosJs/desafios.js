/*
Pergunte ao usuário qual é o dia da semana.  
Se a resposta for "Sábado" ou "Domingo", 
mostre "Bom fim de semana!". 
Caso contrário, mostre "Boa semana!".
*/
const diaSemana = prompt('Qual dia da semana?');
console.log(diaSemana);
console.log(typeof(diaSemana)); // tipo String
if((diaSemana == 'Sábado') || (diaSemana == 'Domingo')){
    alert('Bom final de semana!');
    console.log('Bom final de semana!');
}else {
    alert('Boa semana!');
    console.log('Boa semana!');
}
/*
Verifique se um número digitado pelo usuário é 
positivo ou negativo. Mostre um alerta informando.
*/
const number = prompt('Digite um numero: ');
console.log('Número digitado foi ' + number);
console.log('[antes conversao] -> ' + typeof(number)); // tipo String tem que converter caso queira int
const numberInt = parseInt(number);
console.log('[apos conversao] -> ' + typeof numberInt); // tipo Inteiro apos conversão
if(number>0){
    alert(`${number} é positivo`);
    console.log(`${number} é positivo`);
}else{
    alert(number + ' é negativo');
    console.log(number + ' é negativo');
}
/*
Crie um sistema de pontuação para um jogo. 
Se a pontuação for maior ou igual a 100, 
mostre "Parabéns, você venceu!". 
Caso contrário, mostre "Tente novamente para ganhar.".
*/
const pontuacao = prompt('Digite sua pontuação no jogo: ');
console.log(pontuacao + ' pontos!')
if(pontuacao >= 100){
    console.log('Parabéns, você venceu o jogo!');
}else {
    console.log('Tente novamente para ganhar.');
}
/*
Crie uma mensagem que informa o usuário sobre o saldo da conta, 
usando uma template string para incluir o valor do saldo.
*/
let valorDeposito = 1000.00; //valor já declarado como int, caso contrario é o prompt vem como string

let saldo = parseFloat(valorDeposito);
console.log('Seu saldo na conta é de R$'+ saldo);
alert('Seu saldo na conta é de R$'+ saldo);
console.log('typeof do valorDeposito -> ' + typeof(valorDeposito));
console.log('typeof do saldo -> ' + typeof(saldo));
/*
Peça ao usuário para inserir seu nome usando prompt. 
Em seguida, mostre um alerta de boas-vindas usando esse nome.
*/
let nomeUsuario = prompt('Digite seu nome novo usuário: ');
alert(`Olá ${nomeUsuario}! Bem vindo ao sistema.`);
console.log('Olá '+ nomeUsuario + '! Bem vindo ao sistema.');