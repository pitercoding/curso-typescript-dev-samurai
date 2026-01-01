/* Crie uma função que receba uma frase e informe quantos caracteres ela possui. */

function verificarQuantidadeDeCaracteres(frase: string): number {
    return frase.trim().length;
}

console.log(verificarQuantidadeDeCaracteres('Olá, mundo! Este é um exemplo.')) // 28
