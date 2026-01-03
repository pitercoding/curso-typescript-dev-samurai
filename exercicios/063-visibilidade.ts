/* 
Exercício 2 — Controle de Temperatura
** Crie uma classe chamada Thermostat com:
- Um atributo privado temperature (number)
- Um atributo público location (string)
** A classe deve possuir:
- Um método público increase() que aumenta a temperatura em 1
- Um método público decrease() que diminui a temperatura em 1
- Um método público getTemperature() para consultar o valor atual
** Impedir acesso direto ao atributo temperature.
*/

class Thermostat {
   private temperature: number; 
   public location: string;

   constructor(temperature: number, location: string) {
    this.temperature = temperature;
    this.location = location;
   }

   public increase(): number {
    return this.temperature += 1;
   }

   public decrease(): number {
    return this.temperature -= 1;
   }

   public getTemperature(): number {
    return this.temperature;
   }
}

const carioca = new Thermostat(45, 'Rio De Janeiro');
const paulista = new Thermostat(36, 'São Paulo');
const paranaense = new Thermostat(26, 'Curitiba');
const amazonas = new Thermostat(35, 'Manaus');
const potiguar = new Thermostat(33, 'Natal');

carioca.increase(); // 45+1
console.log(`Temperatura atual em ${carioca.location}: ${carioca.getTemperature()}°C.`); // 46

paulista.increase(); // 36+1
paulista.increase(); // 37+1
console.log(`Temperatura atual em ${paulista.location}: ${paulista.getTemperature()}°C.`); // 38

paranaense.decrease(); // 26-1
paranaense.decrease(); // 25-1
console.log(`Temperatura atual em ${paranaense.location}: ${paranaense.getTemperature()}°C.`); // 24

amazonas.increase(); // 35+1
amazonas.increase(); // 36+1
amazonas.decrease(); // 37-1
console.log(`Temperatura atual em ${amazonas.location}: ${amazonas.getTemperature()}°C.`); // 36

potiguar.decrease(); // 33-1
potiguar.increase(); // 32+1
console.log(`Temperatura atual em ${potiguar.location}: ${potiguar.getTemperature()}°C.`); // 33