/* Crie um array de números e calcule a soma de todos os valores. */

const numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let soma = 0;

for (const n of numeros) {
    soma += n; 
}

// const somaReduce = numeros.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(`A soma é:  ${soma}`);