notas = [] #lista vazia
nota_informada = input('Digite a nota ou SAIR para calcular media: ')
while nota_informada != 'SAIR':
    notas.append(float(nota_informada))
    print(f'Nota {nota_informada} armazenda')
    nota_informada = input('Digite a nota ou SAIR para calcular media')

print(f'Notas coletadas: {notas}')

soma_das_notas = 0
for nota in notas:
    soma_das_notas += nota

print(f'A soma das notas é {soma_das_notas}')

media = soma_das_notas/ len(notas)
print(f'A média das notas é: {media}')