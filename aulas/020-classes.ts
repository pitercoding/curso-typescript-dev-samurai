class Dog {
  // 1: Propriedades da classe (estrutura do objeto)
  name: string;
  weight: number;
  color: string;
  breed: string;
  size: number;

  // 2: Construtor: executa quando usamos "new"
  constructor(
    name: string,
    weight: number,
    color: string,
    breed: string,
    size: number
  ) {
    // 3: this = o objeto que está sendo criado
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
    this.size = size;
  }

  // 4: Método da classe (comportamento)
  describe(): string {
    return `${this.name} pesa ${this.weight}kg, é da cor ${this.color} e da raça ${this.breed}.`;
  }
}

// 5: Usando a classe
const pop: Dog = new Dog("Pop", 15, "preto", "vira lata", 20);
const balu: Dog = new Dog("Balu", 25, "caramelo", "vira lata", 30);

console.log(pop.name);     // Pop
console.log(balu.weight); // 25
console.log(pop.describe()); // Pop pesa 15kg, é da cor preto e da raça vira lata.

