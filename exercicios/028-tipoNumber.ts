/* Crie uma função que receba um número e informe se ele é positivo, negativo ou zero. */

const positivoNegativoOuZero = (numb1: number): string =>
  numb1 === 0 ? "Número informado: Zero." :
  numb1 > 0 ? "Número positivo." :
  "Número negativo.";

console.log(positivoNegativoOuZero(0));   // Número informado: Zero.
console.log(positivoNegativoOuZero(1));   // Número positivo.
console.log(positivoNegativoOuZero(-3));  // Número negativo.
