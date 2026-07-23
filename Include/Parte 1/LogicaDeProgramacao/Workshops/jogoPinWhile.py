import time
print('Jogo do PIN')
numero = 1 #contador
while numero <= 40:
    if (numero%4 == 0):
        print('PIN')
    else:
        print(numero)    
    numero += 1
    time.sleep(0.5)
