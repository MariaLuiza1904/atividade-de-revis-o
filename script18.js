function somarAteN(n) {
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        soma += i;
    }

    return soma;
}

// exemplo de uso
let resultado = somarAteN(5);
alert(resultado);