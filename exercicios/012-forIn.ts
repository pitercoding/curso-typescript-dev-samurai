/* Crie um array de cores e use for...in para imprimir apenas os índices. */

const cores: string [] = [
    'vermelho',
    'preto',
    'azul',
    'cinza',
    'amarelo',
    'rosa',
    'verde'
];

for (const indice in cores) {
    console.log(indice);
}

/*
0
1
2
3
4
5
6
*/