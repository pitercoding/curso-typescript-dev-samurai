/* 
Exercício 1 — Conta Bancária (encapsulamento básico)
** Crie uma classe chamada BankAccount com:
- Um atributo privado balance (number), iniciado em 0
- Um atributo público owner (string)
** A classe deve possuir:
- Um método público deposit(amount: number) que adiciona valor ao saldo
- Um método público withdraw(amount: number) que só permite saque se houver saldo
- Um método público getBalance() que retorna o saldo atual
**  O saldo não pode ser acessado diretamente fora da classe.
*/

class BankAccount {
  private balance: number = 0;
  public owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }

  public deposit(amount: number): void {
    this.balance += amount;
    console.log(`R$${amount} depositado com sucesso!`);
  }

  public withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("[ERRO!] Valor inválido");
      return;
    } else if (amount > this.balance) {
      console.log(
        `[ERRO!] Saldo insuficiente para sacar o valor requerido de R$${amount}. Saldo atual: R$${this.balance}.`
      );
    } else {
      this.balance -= amount;
      console.log(`R$${amount} sacado com sucesso!`);
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}

const minhaContaBancaria: BankAccount = new BankAccount("Racha Cuca");

console.log('========== Banco "O Banqueiro" ==========');
console.log("--- Bem vindo(a) ao terminal de saque ---");
console.log(`Saldo atual: R$${minhaContaBancaria.getBalance()}`);
minhaContaBancaria.deposit(100);
minhaContaBancaria.withdraw(30);
console.log(`Saldo atual: R$${minhaContaBancaria.getBalance()}`);
minhaContaBancaria.withdraw(71);
minhaContaBancaria.deposit(345);
minhaContaBancaria.withdraw(300);
console.log(`Saldo atual: R$${minhaContaBancaria.getBalance()}`);
