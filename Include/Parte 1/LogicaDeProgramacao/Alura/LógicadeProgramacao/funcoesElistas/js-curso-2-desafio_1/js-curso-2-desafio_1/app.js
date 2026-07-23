let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Hora do desafio';
titulo.textContent = 'Hora do desafio'; //forma difeerente do acima

function verificarBotao() {
    console.log('O botão foi clicado!');
}

function verificarAlerta() {
    alert('Eu amo JavaScript!');
}

function verificarPrompt() {
    let cidade = prompt('Digite o nome de uma cidade:');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function verificarSoma() {
    let numero1 = parseInt(prompt('Digite o primeiro número:'));
    let numero2 = parseInt(prompt('Digite o segundo número:'));

    let soma = numero1 + numero2;

    alert(`A soma é ${soma}`);
}