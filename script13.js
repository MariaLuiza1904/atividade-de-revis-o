function contarPares(n) {
    let contador = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            contador++;
        }
    }

    return contador;
}

// exemplo de uso
let resultado = contarPares(10);
alert(resultado);