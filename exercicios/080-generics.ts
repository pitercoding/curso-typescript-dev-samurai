/*
Exercício 6 — Função genérica com restrição
Crie uma função genérica que receba um objeto que possua a propriedade id.
A função deve retornar o valor do id recebido.
Utilize uma restrição (extends) para garantir que o tipo genérico possua essa propriedade.
*/

const user = {
    id: 123,
    name: "Racha Cuca",
}

// <T extends { id: number }> O tipo genérico T pode ser qualquer coisa, desde que tenha uma propriedade id do tipo number
function getId<T extends { id: number }>(obj: T): number {
    return obj.id;
}

console.log(getId(user));