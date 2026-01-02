/* Uso de type. Crie um tipo chamado ID que pode ser string ou number.
Depois, declare uma função showID que recebe um parâmetro desse tipo e imprime no console. */

type ID = string | number;

function showID(id: ID): string {
    return `O ID é ${id}. Tipo de ID: ${typeof id}`;
}

console.log(showID('DE1234'));
console.log(showID(1234));