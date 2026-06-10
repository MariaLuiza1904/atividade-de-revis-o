function fatorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

// exemplo de uso
let valor = fatorial(5);
alert(valor);