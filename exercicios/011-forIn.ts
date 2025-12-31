/* Crie um array de nomes e use for...in para imprimir o índice e o nome. Exemplo de saída: 0 - Ana
1 - João */

const nomes: string [] = [
    'Chapolin', 
    'Tripa Seca', 
    'Quase Nada', 
    'Poucas Trancas', 
    'Pirata Alma Negra'
];

for (const indice in nomes) {
    console.log(`${indice} - ${nomes[indice]}`);
}

/*
0 - Chapolin
1 - Tripa Seca
2 - Quase Nada
3 - Poucas Trancas
4 - Pirata Alma Negra
*/

/* For...in percorre índices */