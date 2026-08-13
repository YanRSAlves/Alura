function exibirTextoNaTela(tag,texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1});

}

function verificarChute() {
  console.log("Botão Chutar clicado!");
  let chute = document.querySelector('input').value;

  console.log(chute == numeroSecreto);
  if(chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
    let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled'); //ativa o botão Novo Jogo
  }else {
    if(chute > numeroSecreto){
    exibirTextoNaTela('p', 'O número secreto é menor!');
    }else{
    exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio(){
  let numeroEscolhido = Math.floor(Math.random() *numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
  }

  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  console.log("O botão Novo Jogo foi clicado!");
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'JOGO Nº SECRETO');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'JOGO Nº SECRETO';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

 REPETICAO
let campo = document.querySelector(tag);
campo.innerHTML = texto;
*/

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

