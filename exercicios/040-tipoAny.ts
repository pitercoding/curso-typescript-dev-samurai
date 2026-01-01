/* Simule o retorno de uma biblioteca sem tipagem usando any e utilize esse valor. */

const statusDoLivro = (a: any, b: any, c: any): void => {
    console.log(`Nome do livro: ${a}`);
    console.log(`Preço do livro: ${b}R$`);
    console.log(`Disponível: ${c}`);
}

statusDoLivro('O Senhor dos anéis', 55, false);