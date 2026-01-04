/*
Exercício 1 — Herança básica
- Crie uma classe base chamada Person com as propriedades name e age e um método info() que retorne essas informações.
- Em seguida, crie uma classe Student que herda de Person e adicione a propriedade course.
- Instancie um aluno e exiba suas informações no console.
*/
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    info() {
        return {
            name: this.name,
            age: this.age
        }
    }
}

class Student extends Person {
    private course: string;

    constructor(name: string, age: number, course: string) {
        super(name, age);
        this.course = course;
    }

    override info() {
        return{
            ...super.info(),
            course: this.course
        }
    }
}

const aluno: Student = new Student('Racha Cuca', 37, 'Geografia');

console.log(aluno.info());