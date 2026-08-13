// MÉTODOS DE ARRAYS

const arrNumeros = [12, 23, 34, 45, 56];

arrNumeros.push(67); // ADICIONA ELEMENTO NO FINAL DO ARRAY
console.log(arrNumeros);

arrNumeros.pop(); //REMOVE O ULTIMO ELEMENTO DO ARRAY
console.log(arrNumeros);

const elem = arrNumeros.indexOf(12); // RETORNA O NUMERO DO INDICE ONDE ESTA NO ELEMENTO
console.log(arrNumeros);

//METODO UTILIZANDO CALLBACKS
const novoArr = arrNumeros.slice(2); //RETORNA UMA PARTE DO ARRAY DO A PARTIR DO 2 ATE O FINAL OU COM INTERVALO(2, 4)
const arrCalculado = arrNumeros.map((num) => {
    return num * 10;
});

console.log(arrCalculado);

arrNumeros.forEach((num, i) => {
    console.log(`o número ${num} está no ìndice ${i}`);
});

const arrFiltrado = arrNumeros.filter(num => num % 5 == 0); // retorna numeros divisiveis por 5
console.log(arrFiltrado);

// clonar array multidimensonal com "deep copy"
// por que não podemos clonar arrays via variável

const arr1 = [[1, 2], 2, 3];

const arr2 = arr1;
//arr1[0] = 1; //AQUI MUDA NOS 2 MESMO DEPOIS DE TER "COPIADO"

console.log(arr1);
console.log(arr2);
// DESTA FORMA ELE NÃO ESTA CLONANDO, APENAS FAZENDO UMA REFERENCIA 
// QUANDO FAZEMOS UMA MUDANÇA EM UMA ALTERA O OUTRO

//Possibilidades de Metodos Corretos

//usando deep copy com for
const copiaArray = (arr) => {
    const copia = [];
    arr.forEach((elem) => {
        if (Array.isArray(elem)){
            copia.push(copiaArray(elem));
        } else{
            copia.push(elem);
        }
    });
    return copia;

};
const arr3 = copiaArray(arr1);
arr1[0][0] = 5;

console.log(arr1);
console.log(arr3);

// filtrar um array e alterar valores específicos
// alterar numeros para strings

const cpfs = ['12323434545', '34657856785', 43254365434, '76547876345', 56787657564];

const result = cpfs.map(cpf => typeof cpf == 'string' ? cpf : cpf.toString());

console.log(result);