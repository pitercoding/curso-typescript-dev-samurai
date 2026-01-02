/* Uso de interface. Crie uma interface chamada Person com as propriedades name (string) e age (number). Declare um objeto que implemente essa interface. */

interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: 'Quase Nada',
    age: 37,
}

const getPersonData = (p: Person): Person => {
    return p;
}

let pessoaFinal = getPersonData(person);
console.log(pessoaFinal);