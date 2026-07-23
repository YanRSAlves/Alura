//Sintaxe do Array em JS
                //  0   1  2   3
const arrNumeros = [10, 20, 30, 40];
const arrMisto = [5, true, 'texto'];
const arrArrays = [[1, 2], ['a', 'b', 'c'], [true, false]];
const arrObjetos = [ { a: 1 }, { b: 2 }, { c: 3 }];

console.log(arrNumeros[0]);
console.log(arrNumeros[1]);
console.log(arrNumeros[2]);
console.log(arrNumeros[3]);

arrNumeros[1] = 36;
arrNumeros[4] = 100;

console.log(arrNumeros);