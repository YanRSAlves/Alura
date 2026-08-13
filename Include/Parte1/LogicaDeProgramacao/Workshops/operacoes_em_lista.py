alunos = ['Andre', 'Bruna','Caio','Daniel','Elen','Fernando']
print(f'Tamanho da Lista: {len(alunos)}') #Imprime tamanho da lista
alunos.append('Yan') #adiciona elemento na lista
print(f'Lista com elemento inserido: {alunos} ') #imprimi nova lista

print(f'Quarto elemento: {alunos[3]}') #Imprime Quarto elemento

for nome in alunos:
    print(nome)