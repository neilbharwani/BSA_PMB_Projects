print('basic calculator')
while True:
    try:
        a = float(input('first number: '))
        op = input('operator (+ - * /): ').strip()
        b = float(input('second number: '))
        if op == '+':
            r = a + b
        elif op == '-':
            r = a - b
        elif op == '*':
            r = a * b
        elif op == '/':
            if b == 0:
                print('cannot divide by zero')
                continue
            r = a / b
        else:
            print('unknown operator')
            continue
        print('result:', r)
    except ValueError:
        print('please use numbers')
        continue
    again = input('again? (y/n): ').strip().lower()
    if again != 'y':
        break
