/* Crie uma função que receba um número e retorne "Par" ou "Ímpar" usando operador ternário. */

function parOuImpar(numero: number): string {
    return numero % 2 === 0 ? 'par' : 'ímpar';
}

console.log(parOuImpar(1)); // ímpar
console.log(parOuImpar(2)); // par
console.log(parOuImpar(0)); // par