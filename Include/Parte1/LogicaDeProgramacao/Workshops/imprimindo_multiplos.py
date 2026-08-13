import time
print('Imprimindo Multiplos')

multiplo = int(input('Informe o numero para imprimir os Multiplos: '))

for numero in range(0,101,multiplo):
    print(numero)
    time.sleep(0.34)
