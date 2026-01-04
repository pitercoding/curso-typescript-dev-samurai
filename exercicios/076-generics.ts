/*
Exercício 2 — Função genérica simples
Crie uma função genérica chamada identity que receba um valor de qualquer tipo e retorne esse mesmo valor.
Teste a função passando valores de tipos diferentes.
*/

function identity<T>(value: T): T {
    return value;
}

// TypeScript infere o tipo de T automaticamente
const numberValue = identity(1);     // T é number
const stringValue = identity("a");   // T é string
const booleanValue = identity(true); // T é boolean

console.log(numberValue);
console.log(stringValue);
console.log(booleanValue);

