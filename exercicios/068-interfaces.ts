/*
Exercício 2 — Sistema de Veículos
Objetivo: Praticar implementação de interface por múltiplas classes.
** Crie uma interface chamada Vehicle com:
- Uma propriedade speed: number
- Um método move(): void
** Crie duas classes:
- Car
- Bike
** Cada classe deve:
- Implementar Vehicle
- Definir uma velocidade diferente
- Exibir no console como o veículo está se movendo
** Crie uma função que receba um array de Vehicle e chame o método move.
*/

interface Vehicle {
    type: string;
    speed: number;
    move(): void;
}

class Car implements Vehicle {
    
    type: string;
    speed: number;

    constructor(type: string, speed: number) {
        this.type = type;
        this.speed = speed;
    }

    move(): void {
        console.log(`${this.type} se move a ${this.speed}Km/h.`)
    }
}

class Bike implements Vehicle {

    type: string = "Bicicleta";
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    move(): void {
        console.log(`${this.type} se move a ${this.speed}Km/h.`)
    }
}

const ferrari: Vehicle = new Car('Ferrari', 200);
const fusca: Vehicle = new Car('Fusca', 80);
const bicicleta: Vehicle = new Bike(30);

function movendo(veiculos: Array<Vehicle>) {
    veiculos.forEach((v) => v.move());
}

movendo([ferrari, fusca, bicicleta]);
