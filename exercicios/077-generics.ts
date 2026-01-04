/*
Exercício 3 — Tipo genérico para lista
Crie um tipo genérico chamado List<T> que possua uma propriedade items do tipo Array<T>.
Utilize esse tipo para criar uma lista de usuários e uma lista de produtos.
*/

type List<T> = {
    items: Array<T>;
}

const listaUsuarios: List<string> = {
    items: ["Ana", "Gui", "Bia"]
};

const listaProdutos: List<string> = {
    items: ["iPad", "PC", "Relógio"]
};

// Testando no console
console.log(listaUsuarios.items);
console.log(listaProdutos.items);



