/*
Exercício 2 — Sobrescrita de método
- Crie uma classe base chamada Employee com as propriedades name e salary e um método getSalary() que retorna o salário.
- Crie uma classe Manager que herda de Employee e sobrescreva o método getSalary() para adicionar um bônus fixo ao salário.
- Exiba o salário de um funcionário comum e de um gerente.
*/

class Employee {
    name: string;
    protected salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getSalary(): number{
        return this.salary;
    }
}

class Manager extends Employee {

    constructor(name: string, salary: number, private bonus: number) {
        super(name, salary);
    }

    override getSalary(): number{
        return super.getSalary() + this.bonus;
        }
}

const standardEmployee: Employee = new Employee('Tripa Seca', 5000);
const manager: Manager = new Manager('Quase Nada', 5000, 2000);

console.log(`O funcionário ${standardEmployee.name} recebe um salário de R$${standardEmployee.getSalary()}`);
console.log(`O funcionário ${manager.name} recebe um salário de R$${manager.getSalary()}`);