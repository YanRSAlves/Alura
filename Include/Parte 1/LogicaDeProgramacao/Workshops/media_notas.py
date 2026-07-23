notas = [10,3,9,8,7.9] #lista de valores indexados
print(notas)
print(len(notas)) #retorna o tamanho da lista
notas.append(10) #adiciona um elemento no final da lista
print(notas)
notas[1] = 5 #atribui um valor pra indice especifico

for nota in notas: #percorre todos valores de notas
    print(nota)

nome = 'Yan Rocha'
for letra in nome:
    print(letra)