console.log('Acessando e modificando elementos de um array');
const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];
console.log(listaDeCompras);

const numeroItem = 2;
console.log(`O item ${numeroItem} é o ${listaDeCompras[numeroItem - 1]}`);

listaDeCompras[listaDeCompras.length - 1] = 'fruta'; 
//ATRAVES DO LENGTH PEGO O VALOR DO TOTAL - 1, QUE SERIA O ULTIMO ELEMENTO.
console.log('Lista após modificação: ', listaDeCompras);


console.log('Percorrendo listas com for');

const despesas = [120, 80, 45.5, 200, 60];
let totalDespesas = 0;
for(let i = 0;i < despesas.length; i++){
    totalDespesas += despesas[i];
}
console.log(`Total de despesas: ${totalDespesas}`);

console.log('Exibindo nomes com for...of');

const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];

for (const nome of estudantes) {
  console.log("Estudante:", nome);
}

console.log('Exibindo mensagens com forEach()');

const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];
mensagens.forEach(msg => console.log('Notificação: ', msg));

console.log('Adicionando e removendo itens de uma lista');

const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];
console.log(tarefas);
tarefas.push('Pagar boletos')
console.log(`Lista após adicionar: ${tarefas}`);
console.log(`Lista após remover a última tarefa: ${tarefas}`);