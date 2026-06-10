function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// exemplo de uso
let resultado = calcularIMC(70, 1.75);
alert(resultado);