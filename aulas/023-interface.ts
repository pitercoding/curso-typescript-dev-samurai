// Uma define o que uma classe deve ter, mas não como será feito.
interface Car {
    parts: Array<string>;
    assembly(): void;
}

class CarModelA implements Car {
    parts: string[] = ['engine1.0', "manual_transmission"];
    assembly() {
        const car = this.parts.join(".");
        console.log(`Carro Model A montado: ${car}`);
    }
}

class CarModelB implements Car {
    parts: string[] = ['engine2.0', "automatic_transmission"];
    assembly() {
        const car = this.parts.join(",")
        console.log(`Carro Model B montado: ${car}`);
    }
}

const modelA = new CarModelA();
const modelB = new CarModelB();

function assemblyCars(cars: Array<Car>) {
    cars.forEach((car) => car.assembly())
}

assemblyCars([modelA, modelB]);