/* Crie um array com nomes de cidades e use for...of para imprimir cada cidade. */

const cidades: string[] = [
    "São Paulo",
    "Rio de Janeiro",
    "Belo Horizonte",
    "Curitiba",
    "Porto Alegre",
    "Salvador",
    "Fortaleza",
    "Brasília",
    "Manaus",
    "Recife"
];

for (const cidade of cidades) {
    console.log(cidade);
}

/*
São Paulo
Rio de Janeiro
Belo Horizonte
Curitiba
Porto Alegre
Salvador
Fortaleza
Brasília
Manaus
Recife
*/

/* for...of percorre os valores do array */