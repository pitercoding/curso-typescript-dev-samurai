class Dog {
  // 1: Propriedades da classe (estrutura do objeto)
  name: string;
  weight: number;
  color: string;
  breed: string;
  size: number;

  // 2: Método Construtor: executa quando usamos "new"
  constructor(name: string, weight: number, color: string, breed: string, size: number) {
    // 3: this = o objeto que está sendo criado
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
    this.size = size;
  }

  // 4: Método da classe (comportamento)
  bark(): void {
    console.log("Au Au");
  }

  hear(noise: string): void {
    if (noise === this.name) {
        this.bark()
    }
  }

  calcularHairCut(): number {
    return (this.size * this.weight) / 100;
  }
}

// 5: Criando uma instância da classe
const pop: Dog = new Dog("Pop", 15, "preto", "vira lata", 20);
const balu: Dog = new Dog("Balu", 25, "caramelo", "vira lata", 30);

console.log("===== bark =====");

pop.bark(); // Au Au
balu.bark(); // Au Au

console.log("===== hear =====");
pop.hear("Pop");  // Au Au
pop.hear("Balu"); // (não faz nada)

console.log("===== HairCut =====");
const cortePop = pop.calcularHairCut();
console.log(cortePop); // (20 * 15) / 100 = 3

const corteBalu = balu.calcularHairCut();
console.log(corteBalu); // (30 * 25) / 100 = 7.5