function menorNumero(a, b, c) {
    let menor = a;

    if (b < menor) {
        menor = b;
    }

    if (c < menor) {
        menor = c;
    }

    return menor;
}

// exemplo de uso
let resultado = menorNumero(10, 3, 7);
alert(resultado);