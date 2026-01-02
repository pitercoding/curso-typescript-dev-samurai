/* 
Classe básica com método
Crie uma classe chamada Person com as propriedades:
- name (string)
- age (number)
A classe deve possuir:
- Um constructor para inicializar as propriedades
- Um método chamado introduce que retorna uma string com a frase: "Olá, meu nome é X e eu tenho Y anos."
Depois, crie um objeto dessa classe e exiba o retorno do método no console.
*/

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce():string {
    return `Olá, meu nome é ${this.name} e eu tenho ${this.age} anos.`;
  }
}

const person1: Person = new Person("Tripa Seca", 37);
console.log(person1.introduce());
