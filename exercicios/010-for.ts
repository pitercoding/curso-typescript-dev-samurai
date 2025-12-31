/* Crie um array de números e use for para imprimir apenas os números pares. */

const num: number [] = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < num.length; index++) {
    if (num[index] % 2 === 0) {
        console.log(num[index]);
    }
    
}

/*
2
4
6
8
10
*/