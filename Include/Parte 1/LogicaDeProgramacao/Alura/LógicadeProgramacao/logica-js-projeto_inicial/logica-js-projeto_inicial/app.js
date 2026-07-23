alert('Boas Vindas ao jogo do número secreto'); /'mostra notificação na tela'/
// Declaração do numero secreto
//let numeroSecreto = 5;
//let numeroSecreto = parseInt(Math.random()*100)+1;// entre 1 e 10 com a soma de + 1
let numeroSecreto = Math.floor(Math.random()*100)+1;//opção onde substitui o parseInt pelo mais recomendado Math.floor()
//Math.floor() ele arredonda pra baixo valores float(que a funcao Math.random retorna)


let chute;
let tentativas = 1;
console.log('Valor do chute:', chute);

console.log(numeroSecreto);
console.log('Resultado da comparação:', chute == numeroSecreto);
while(chute != numeroSecreto){
    chute = Number(prompt('Descubra um número entre 1 e 100'));
    if(chute == numeroSecreto){
        console.log(`Voce descobriu o número secreto ${numeroSecreto}`); // uso da crase (` `)
        alert(`Voce descobriu o número secreto ${numeroSecreto}`);
        //alert('Voce descobriu o número secreto ' + numeroSecreto );
        break; //para nao contabilizar mais uma tentativa
    }else{
        if(chute > numeroSecreto){
            console.log('O número Secreto é menor que '+ chute);
            alert('O número Secreto é menor que '+ chute);
        }else {
            console.log('O número Secreto é maior que '+ chute);
            alert('O número Secreto é maior que '+ chute);
        }
        
    }
    tentativas++;
}

//let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }

alert('Total tentativas = ' + tentativas);

let nomeUsuario = prompt('Digite seu nome: ');
let idadeUsuario = prompt('Digite sua idade: ');

let temPao = prompt('Você tem pão em casa? Responda com sim ou não');

if (temPao === 'sim') { 
    alert('Fazer sanduíche'); 
} else { 
    alert('Fazer miojo'); 
}