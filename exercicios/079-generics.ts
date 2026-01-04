/*
Exercício 5 — Paginação com Generics
Crie um tipo genérico chamado Page<T> que represente uma estrutura de paginação com:
- lista de itens
- página atual
- total de páginas
Utilize esse tipo para paginar uma lista de usuários e uma lista de produtos.
*/

type Page<T> = {
    list: Array<T>;
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
    totalItems: number;
}

const listaUsuarios: Page<string> = {
    list: ["Bia", "Ana", "Gui"],
    itemsPerPage: 1,
    currentPage: 1,
    totalPages: 3,
    totalItems: 3,
}

const listaProdutos: Page<string> = {
    list: ["iPad", "iWatch", "iMac", "iLuva"],
    itemsPerPage: 2,
    currentPage: 2,
    totalPages: 2,
    totalItems: 4,
}

console.log(listaUsuarios);
console.log(listaProdutos);