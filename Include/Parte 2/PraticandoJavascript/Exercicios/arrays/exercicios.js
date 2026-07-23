// ARRAY
// Pratican♂do construções de arrays e acessando seus elementos através de índices

const arr = [1, 2, 3, 4];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

arr[5] = 10;
delete arr[4];
delete arr[5];

console.log(arr);
//mostra array esparço(espaço vazio) e nao mostra erro mesmo usando delete

const arrNumeros = [46, 34, 23, 12];
console.log(arrNumeros);

for (let i = 0; i < arrNumeros.length; i++){
    arrNumeros[i] = arrNumeros[i] * 10;
}

console.log(arrNumeros);

const estudantes = ['jUlIAnA', 'aLIne', 'SolanGE'];
console.log(estudantes);

for(let i = 0; i < estudantes.length; i++){
    estudantes[i] = estudantes[i].toUpperCase();
}

console.log(estudantes);

const arraysNumeros = [18, 95, 98, 94, 253, 99];

for (let numero of arraysNumeros){
    if(numero + 10 > 100 || numero > 100) continue;
    console.log(numero + 10);
};

// criar um array em uma sequência entre x e y

function criaArrNum(inicio, fim){
    const arr = [];
    let elemento = inicio;
    for (let i = 0, j = 0; j < fim; i++, elemento++){
        arr[i] = elemento;
        j = elemento;
    }
    return arr;
}

// CRIANDO DESTA FORMA ABAIXO UTILIZANDO O 12 COMO INICIO
//  O RESULTADO MOSTRA 12 VALORES VAZIO NO INICIO

// function criaArrNum(inicio, fim){
//     const arr = [];
    
//     for (let i = inicio; i <= fim; i++){
//         arr[i] = i;
//     }
//     return arr;
// }

console.log(criaArrNum(12, 30));
