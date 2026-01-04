/* Herança adicionar/sobrescreve comportamentos de uma classe/contrato */

class Car {
    model: string;
    maxSpeedy: number;
    actualSpeedy: number;
    private gears: number;

    constructor(model: string, maxSpeedy: number, actualSpeedy: number, gears: number){
        this.model = model;
        this.maxSpeedy = maxSpeedy;
        this.actualSpeedy = actualSpeedy;
        this.gears = gears;
    }

    info() {
        return {
            model: this.model,
            maxSpeedy: this.maxSpeedy,
            actualSpeedy: this.actualSpeedy
        };
    }
}

class ModelA extends Car {
    constructor() {
        super('Uno', 150, 100, 5);
    }
}

class ModelB extends Car {
    private sportMode: boolean = false;

    constructor() {
        super('Ferrari', 200, 150, 6);
    }

    toggleSportMode() {
        this.sportMode = !this.sportMode
        this.maxSpeedy += this.sportMode ? 50 : -50;
    }

    override info() {
        return {
            ...super.info(),
            sportMode: this.sportMode
        };
    }
}

const cars: Car[] = [new ModelA(), new ModelB()];

cars.forEach(car => console.log(car.info()));