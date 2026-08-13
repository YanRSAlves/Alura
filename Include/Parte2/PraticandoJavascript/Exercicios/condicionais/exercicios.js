//IF e ELSE

const num1 = 2;
const num2 = 4;
const operacao = 'divisao';

if(operacao === 'soma'){ // exatamente igual a outra mesmo tipo
    console.log(num1 + num2);
}else if(operacao === 'multiplicação'){
    console.log(num1 * num2);
}else{
    console.log('operação não identificada');
}
///////////////////////////////////////////////////////////////////////
const salario = 3000;

if(salario >= 11000){
    console.log('3% de bônus');
}else if(salario <= 11000 && salario >= 7000){
    console.log('5% de bônus');
}else if(salario <= 7000 && salario >= 4000){
    console.log('7% de bônus');
}else{
    console.log('9% de bônus');
}
////////////////////////////////////////////////////////////////////////
const idade = 19;
const possuiCHN = true;

if(idade >= 18 && possuiCHN){
    console.log('pode dirigir')
}else if(idade >= 17){
    console.log('pode procurar uma autoescola')
}else{
    console.log('não pode dirigir')
}
//////////////////////////////////////////////////////////////////////////
const ano = 2000;
//verifica ano bissexto.
//é quando:
//deve ser divisivel por 4 mas nao por 100
//ou
// deve ser divisivel por 100 e por 400

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)){
    console.log(`${ano} é bissexto`);
} else {
    console.log(`${ano} não é bissexto`);
}
///////////////////////////////////////////////////////////////////////////
//operado ternario

const nome = 'Fernando';
const saudacao = nome ? `olá, ${nome}`: 'olá, pessoa';
console.log(saudacao); 
///////////////////////////////////////////////////////////////////////////
//Swith/case

const avaliacao = 1;
switch (avaliacao){
    case 5:
        console.log('avaliacao ótima');
        break;
    case 4:
        console.log('avaliacao boa');
        break;
    case 3:
        console.log('avaliacao media');
        break;
    case 2:
        console.log('avaliacao neutra');
        break;
    default:
        console.log('avaliacao baixa');
        break;
}
////////////////////////////////////////////////////////////////////////////
//Exercicio condicional com switch

const nome1 = 'Roberta';
const nota = 8;
const faltas = 3;

const recebeBonus = (nota>=8) && (faltas<=2) 
? `${nome1} recebe bônus` 
: `${nome1} não recebe bônus`;
console.log(recebeBonus);
////////////////////////////////////////////////////////////////////////////
const user = 'premium';
switch (user){
    case 'free':
        console.log('acesso limitado');
        break;
    case 'premium':
        console.log('acesso total ao app e bonus');
        break;
    case 'super premium':
        console.log('acesso total ao app e bonus');
        break;
    default:
        console.log('tipo de user desconhecido');
        break;
}
////////////////////////////////////////////////////////////////////////////
const temperatura = 22;

if (temperatura < 15) {
  console.log("Frio");
} else if (temperatura >= 15 && temperatura <= 25) {
  console.log("Agradável");
} else {
  console.log("Quente");
}
///////////////////////////////////////////////////////////////////////////
const idade1 = 15;
 
if (idade1 < 12) {
  console.log("Infantil");
} else if (idade1 >= 12 && idade1 < 18) {
  console.log("Juvenil");
} else {
  console.log("Adulto");
}
///////////////////////////////////////////////////////////////////////////
const diaSemana = 6;
 
if (diaSemana === 6 || diaSemana === 0) {
  console.log("A loja está aberta em horário especial: 10h às 14h.");
} else {
  console.log("A loja está aberta no horário normal: 9h às 18h.");
}
///////////////////////////////////////////////////////////////////////////
const usuario = "admin";
const mensagem = (usuario === "admin") ? "Login bem-sucedido!" : "Usuário inválido.";
console.log(mensagem);
//////////////////////////////////////////////////////////////////////////////
const fruta = "maçã";
 
if (fruta !== "laranja" && fruta !== "abacaxi") {
  console.log("Fruta incompatível para a receita.");
} else {
  console.log("Fruta compatível para a receita.");
}
////////////////////////////////////////////////////////////////////////////////
const carrinhoVazio = false;
if (!carrinhoVazio) {
  console.log("Compra finalizada com sucesso!");
} else {
  console.log("Não é possível finalizar a compra: carrinho vazio.");
}
////////////////////////////////////////////////////////////////////////////////////
const status = "aprovado";
 
switch (status) {
  case "pendente":
    console.log("Pagamento pendente.");
    break;
  case "aprovado":
    console.log("Pagamento aprovado.");
    break;
  case "recusado":
    console.log("Pagamento recusado.");
    break;
  default:
    console.log("Status inválido.");
    break;
}
/////////////////////////////////////////////////////////////////////////////////////
const pontos = 60;
const vidas = 1;
 
if (pontos > 50 && vidas > 0) {
  console.log("Próximo nível liberado!");
} else {
  console.log("Não pode avançar para o próximo nível.");
}
//////////////////////////////////////////////////////////////////////////////////////
const bateria = 10;
 
const statusBateria = (bateria < 20) 
  ? "Crítica" 
  : (bateria <= 80) 
    ? "Moderada" 
    : "Cheia";
 
console.log(statusBateria);
//////////////////////////////////////////////////////////////////////////////////////////