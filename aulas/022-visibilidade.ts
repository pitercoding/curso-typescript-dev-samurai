class Dog {
  // 🔓 pública: acessível de fora da classe
  public name: string;

  // 🔒 privada: só pode ser acessada dentro da classe
  private energy: number = 100;

  constructor(name: string) {
    this.name = name;
    console.log(`[CONSTRUCTOR] ${this.name} criado com energia ${this.energy}`);
  }

  // 🔒 método privado: regra interna da classe
  private hasEnoughEnergy(): boolean {
    return this.energy >= 30;
  }

  // 🔒 método privado: regra interna da classe
  private isFullEnergy(): boolean {
    return this.energy >= 100;
  }

  // 🔓 método público: comportamento visível
  public bark(): void {
    console.log(`\n[AÇÃO] ${this.name} tentou latir`);

    if (!this.hasEnoughEnergy()) {
      console.log(`[FALHA] ${this.name} está cansado demais para latir`);
      return;
    }

    console.log("Au Au 🐶");
    this.energy -= 10;
    console.log(`[ENERGIA] ${this.name} agora tem ${this.energy}`);
  }

  // 🔓 método público
  public eat(food: Food): void {
    console.log(`\n[AÇÃO] ${this.name} está comendo ${food.name}`);

    if (this.isFullEnergy()) {
      console.log(`[INFO] ${this.name} já está com energia máxima`);
      return;
    }

    this.energy += food.energy;

    if (this.energy > 100) {
      this.energy = 100;
    }

    console.log(
      `[ENERGIA] ${this.name} ganhou ${food.energy} de energia → ${this.energy}`
    );
  }

  // 🔓 método público que usa estado interno
  public hear(noise: string): void {
    console.log(`\n[AÇÃO] ${this.name} ouviu: "${noise}"`);

    if (noise === this.name) {
      this.bark();
    } else {
      console.log(`${this.name} ignorou o som`);
    }
  }
}

class Food {
  public name: string;
  public energy: number;

  constructor(name: string, energy: number) {
    this.name = name;
    this.energy = energy;
  }
}

// ===== TESTES =====

const carrot = new Food("Cenoura", 10);
const bone = new Food("Osso", 5);

const pop = new Dog("Pop");
const balu = new Dog("Balu");

pop.bark();
pop.bark();
pop.bark();

balu.bark();

pop.eat(carrot);
balu.eat(bone);

pop.hear("Pop");
pop.hear("Balu");