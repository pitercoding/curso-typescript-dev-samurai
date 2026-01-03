/* 
Exercício 3 — Personagem de Jogo
** Crie uma classe chamada Player com:
- Um atributo privado life (number), iniciando em 100
- Um atributo público name (string)
** A classe deve possuir:
- Um método público takeDamage(amount: number) que reduz a vida
- Um método público heal(amount: number) que aumenta a vida
- Um método privado isAlive() que retorna se a vida é maior que 0
** O método isAlive deve ser usado internamente para validações.
*/

class Player {
  private life: number = 100;
  public name: string;

  constructor(name: string) {
    this.name = name;
    console.log(`${this.name} entrou na batalha com ${this.life} de vida.`);
  }

// Método interno de validação
// 👉 Serve apenas para verificar estado interno
// 👉 Não imprime nada
// 👉 Só a própria classe pode usar
  private isAlive(): boolean {
    return this.life > 0;
  }

// Sofrer dano
// 1. Verifica se está vivo
// 2. Reduz a vida
// 3. Garante que não fique negativa
// 4. Mostra o resultado no console
// 5. Verifica se morreu após o dano
  public takeDamage(amount: number): void {
    if (!this.isAlive()) {
      console.log(`${this.name} já está morto. Não pode sofrer dano.`);
      return;
    }

    this.life -= amount;

    if (this.life < 0) {
        this.life = 0;
    }

    console.log(
      `${this.name} sofreu ${amount} de dano. Vida atual: ${this.life}`
    );

    if (!this.isAlive()) {
        console.log(`${this.name} morreu na batalha!`);
    }
  }

// Curar vida
// 1. Verifica se está vivo
// 2. Aumenta a vida
// 3. Limita a 100
// 4. Exibe o novo estado
  public heal(amount: number): void {
    if (!this.isAlive()) {
      console.log(`${this.name} está morto e não pode ser curado.`);
      return;
    }
    
    this.life += amount;

    if (this.life > 100) {
        this.life = 100;
    }

    console.log(`$${this.name} recuperou ${amount} de vida. Vida atual: ${this.life}`);
  }
}

const knight = new Player("Knight DarkAxe");
const boss = new Player("Morgaroth");

knight.takeDamage(30);
boss.takeDamage(30);

knight.takeDamage(10);
boss.takeDamage(20);

boss.heal(20);

boss.takeDamage(30);

knight.takeDamage(45);
knight.heal(30);

boss.heal(60);

boss.takeDamage(40);

knight.heal(20);
knight.takeDamage(10);

boss.takeDamage(30);

knight.takeDamage(30);

boss.takeDamage(30);
