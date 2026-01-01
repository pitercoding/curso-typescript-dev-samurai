/* Crie uma função que receba dois valores booleanos e retorne se ambos são verdadeiros. */

function verificandoBooleanos(val1: boolean, val2: boolean): string {
    return (val1 && val2) ? 'Ambos valores são verdadeiros.' :
    `Somente um valor é verdadeiro ou ambos são falsos.`
}

console.log(verificandoBooleanos(true, true)); // Ambos valores são verdadeiros.
console.log(verificandoBooleanos(false, true)); // Somente um valor é verdadeiro ou ambos são falsos.
console.log(verificandoBooleanos(false, false)); // Somente um valor é verdadeiro ou ambos são falsos.
