import random as rd

numero_aleatorio = rd.randint(1,10) #programa sorteia um numero aleatorio

tentativa = 1
acertou = False

while tentativa <= 3:
    palpite = int(input('Informe seu palpite: '))
    acertou = palpite == numero_aleatorio
    if acertou:
        #print(f'Acertou! o numero era {numero_aleatorio}')
        break
    elif palpite > numero_aleatorio:
        print('Errou! Tente um numero Menor!')
    else:
        print('Errou! Tente um numero Maior!')
    tentativa+=1

if acertou:
    print(f'Acertou com {tentativa} tentativa(s)! o numero aleatorio era {numero_aleatorio}')
else:
    print(f'Acabou as tentativas! o numero aleatorio era {numero_aleatorio}')

'''
print('Advinhe o numero aleatorio em 3 tentativas')
for tentativa in range(1,4):
    palpite = int(input('Informe seu palpite: '))

    if palpite == numero_aleatorio:
        print(f'Acertou! o numero era {numero_aleatorio}')
        break
    else: 
        print('Errou, tente novamente.')
'''    