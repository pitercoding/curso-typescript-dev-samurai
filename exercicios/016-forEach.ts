/* Crie um array de números e use forEach para imprimir se cada número é par ou ímpar. */

const todosNumeros: number [] = [
    1 ,2, 3, 4, 5, 6, 7, 8, 9, 10
];

todosNumeros.forEach(n => {
    if(n % 2 === 0) {
        console.log(`${n} é par!`)
    } else {
        console.log(`${n} é ímpar!`)
    }
});

/*
1 é ímpar!
2 é par!
3 é ímpar!
4 é par!
5 é ímpar!
6 é par!
7 é ímpar!
8 é par!
9 é ímpar!
10 é par!
*/