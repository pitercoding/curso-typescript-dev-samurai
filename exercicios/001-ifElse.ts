/* Escreva uma função que receba um número e diga se ele é positivo ou negativo. */

function verificarNumero(numero: number) {
    if (numero > 0) {
        return `${numero} é positivo`;
    } else if (numero < 0) {
        return `${numero} é negativo`;
    } else {
        return 'O número é zero';
    }
}

console.log(verificarNumero(4)); // 4 é positivo
console.log(verificarNumero(-2)); // 4 é negativo