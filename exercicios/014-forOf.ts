/* Crie um array de números e use for...of para somar todos os valores e imprimir o total. */

const numbers: number[] = [
    23, 87, 12, 45, 9, 66, 31, 54, 102, 7
];

let soma: number = 0;

for (const n of numbers) {
    soma += n;
}

console.log(`Total da soma: ${soma}`); // Total da soma: 436