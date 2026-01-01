/* Crie uma função que receba uma tuple com produto e preço e imprima essas informações. */

type Produto = {
    nome: string;
    preco: number;
};

const produto: Produto = {
    nome: "iPad",
    preco: 4231,
}

const dadosProduto = (prod: Produto): void => {
    console.log(`Produto: ${prod.nome}, Preço: ${prod.preco}`); 
}

dadosProduto(produto);