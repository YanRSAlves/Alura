function saudacao(nome = '') {
    if (nome) {
        console.log(`Olá, ${nome}! Boas vindas!`);
    } else {
        console.log('Olá! Boas vindas!');
    }
}
saudacao('Lucas');
saudacao();
////////////////////////////////////////////////////////////////////////////////////////
function calculaDesconto(preco, desconto = 10){
    const valorFinal = preco - (preco * desconto / 100);
    return valorFinal;
}
console.log(calculaDesconto(100, 20));
console.log(calculaDesconto(100));
/* ESTRUTURA BÁSICA DA ARROW FUNCTION 
const nomeFuncao = (param) => {
  //lógica  
};
*/
//UTILIZANDO ARROW FUNCTION A MESMA FUNCAO ACIMA em ma linha
//const calculaDesconto = (preco, desconto = 10) => preco - ((preco * desconto) / 100);
//////////////////////////////////////////////////////////////////////////////////////////
const calculaMedia = (nota1, nota2) => (nota1 + nota2) / 2;
console.log(calculaMedia(7, 9));
//////////////////////////////////////////////////////////////////////////////////////////
const verificarParideda = (numero) => {
    if (numero % 2 === 0){
        return 'Par';
    }else{
        return 'Impar';
    }
}
console.log(verificarParideda(8));
console.log(verificarParideda(9));
/* OPCAO DE UMA LINHA COMBIANDO ARROW FUNCTION E TERNARIO
const verificarParidade = (numero) => numero % 2 === 0 ? "Par" : "Ímpar";
*/
///////////////////////////////////////////////////////////////////////////////////////////
const calculaFrete = (distancia) => {
    if (distancia <= 5) {
        return 5;
    } else if (distancia <= 20){
        return distancia * 0.5;
    } else {
        return 20;
    }
};
console.log(calculaFrete(3));
console.log(calculaFrete(12));
console.log(calculaFrete(25));

//REVISAR CALLBACK
function processarPedido(nome, tipoCliente, callback) {
    console.log(`Processando pedido de ${nome}...`);
    callback(nome, tipoCliente);
}
function mensagemPersonalizada(nome, tipo) {
    if (tipo === "vip") {
        console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
    } else if (tipo === "novo") {
        console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
    } else {
        console.log(`Obrigado pela sua compra, ${nome}!`);
    }
}
processarPedido("Lucas", "vip", mensagemPersonalizada);

//REVISAR
function responderUsuario(nome, callback) {
    console.log("Processando sua pergunta...");
    setTimeout(() => {
        callback(nome);
    }, 3000);
}
function mostrarResposta(nome) {
    console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
}
responderUsuario("Camila", mostrarResposta);

//REVISAR
function avaliarDesempenho(pontuacao, callback) {
    let status = "";
 
    if (pontuacao >= 70) {
        status = "aprovado";
    } else if (pontuacao >= 50) {
        status = "reforco";
    } else {
        status = "reprovado";
    }
 
    callback(pontuacao, status);
}
function gerarMensagem(pontuacao, status) {
    console.log(`Pontuação: ${pontuacao}`);
 
    if (status === "aprovado") {
        console.log("Parabéns! Você foi aprovado!");
    } else if (status === "reforco") {
        console.log("Atenção! Você precisa de reforço.");
    } else {
        console.log("Infelizmente, você foi reprovado. Tente novamente.");
    }
}
avaliarDesempenho(82, gerarMensagem);

//REVISAR
function calcularConsumo(potencia, horasPorDia) {
    return (potencia * horasPorDia * 30) / 1000;
}
function classificarConsumo(consumo) {
    if (consumo < 50) {
        return "Baixo consumo";
    } else if (consumo < 200) {
        return "Consumo moderado";
    } else {
        return "Alto consumo";
    }
}
function exibirResumo(nomeAparelho, consumo, classificacao) {
    console.log(`${nomeAparelho} tem consumo de ${consumo.toFixed(1)} kWh/mês e é classificada como ${classificacao}.`);
}
const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);
exibirResumo(nomeAparelho, consumo, classificacao);

//REVISAR
const sortearParticipante = (lista) => {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
};
const avaliarPontuacao = (pontuacao) => {
    if (pontuacao > 80) {
        return "Parabéns, você foi premiado!";
    } else if (pontuacao >= 50) {
        return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
    } else {
        return "Infelizmente, não foi dessa vez.";
    }
};
const exibirResultado = (participante) => {
    console.log("Sorteando...");
    setTimeout(() => {
        console.log(`Participante sorteado: ${participante.nome}`);
        console.log(`Pontuação: ${participante.pontuacao}`);
        console.log(avaliarPontuacao(participante.pontuacao));
    }, 2000);
};
function realizarSorteio(lista) {
    const sorteado = sortearParticipante(lista);
    exibirResultado(sorteado);
}
const participantes = [
    { nome: "Laura", pontuacao: 92 },
    { nome: "Pedro", pontuacao: 67 },
    { nome: "Clara", pontuacao: 44 }
];
realizarSorteio(participantes);

//REVISAR
function contagemRegressiva(numero) {
  if (numero > 0) {
    console.log(numero);
    contagemRegressiva(numero - 1);
  } else {
    console.log("Lançamento!");
  }
}
contagemRegressiva(5);