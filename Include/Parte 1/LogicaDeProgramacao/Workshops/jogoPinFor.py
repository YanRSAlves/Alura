import time
print('Jogo do PIN')

numero = 1 #contador

for numero in range(1,41):
    if (numero%4 == 0):
        print('PIN')
    else:
        print(numero)    
    time.sleep(0.34)
