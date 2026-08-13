function darBoasVindas(nome){
    return `Boas vindas, ${nome}`;
}

let resul = darBoasVindas('Solange');

console.log(resul);
console.log(darBoasVindas('Juliana'));

//DUVIDA: UMA VARIAVEL LOCAL DENTRO DE UMA FUNCAO PODE 
// ATRIBUIR VALOR PARA UMA VARIAVEL GLOBAL PORQUE 
let resultado = 0, texto = 'ola';
function divide(dividendo, divisor = 2){
    resultado = dividendo/divisor;
    texto = `resultado é ${resultado}`;

}

divide(12)
console.log(resultado);
console.log(texto);