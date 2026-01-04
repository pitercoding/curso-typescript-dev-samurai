/*
Exercício 1 — Array genérico
Crie um array genérico usando Array<T> para armazenar uma lista de valores do mesmo tipo.
Em seguida, crie um array de números e outro de strings utilizando essa estrutura.
*/

// Array genérico de números
const integers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Outro array genérico de números
const floats: Array<number> = [3.4, 2.1, 4.4];

// Array genérico de strings
const strings: Array<string> = ["gabaritos", "função", "páginas", "estrutura"];

integers.forEach(i => console.log(i));
console.log("------------")
floats.forEach(f => console.log(f));
console.log("------------")
strings.forEach(s => console.log(s));