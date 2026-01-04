/*
Exercício 3 — Uso de super
- Crie uma classe base chamada Animal com a propriedade name e um método makeSound() que retorna uma string genérica.
- Crie uma classe Dog que herda de Animal e sobrescreva o método makeSound(), chamando o método da classe pai usando super.
- Exiba o som emitido pelo cachorro.
*/
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        return "Som de animal!";
    }
}

class Dog extends Animal {
    
    constructor(name: string) {
        super(name);
    }

    override makeSound() {
        return `${super.makeSound()} Au Au Au!`;
    }
}

const animalGenerico: Animal = new Animal('Animal Generico');
const dog: Dog = new Dog('Bingo');

console.log(`${animalGenerico.name} faz o som: ${animalGenerico.makeSound()}`);
console.log(`${dog.name} faz o som: ${dog.makeSound()}`);