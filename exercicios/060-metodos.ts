/* 
Método com parâmetro
Objetivo: Criar métodos que recebem informações externas para operar sobre o objeto.
- Crie uma classe chamada BankAccount com as propriedades:
owner (string)
balance (number, inicia em 0)
- Crie um método deposit(amount: number) que adiciona amount ao saldo e imprime o saldo atualizado
- Crie um método withdraw(amount: number) que subtrai amount do saldo se houver saldo suficiente e imprime o saldo atualizado
- Crie uma instância da conta e teste depósitos e saques
*/

class BankAccount {
    owner!: string;
    balance: number = 0;

    constructor(owner: string) {this.owner = owner}

    deposit(amount: number): void {
        this.balance = this.balance + amount;
        console.log(`Depósito de R$${amount} efetuado com sucesso. Saldo atual: R$${this.balance}.`);
    }

    withdraw(amount: number): void {
        if (this.balance < amount) {
            console.log(`[ERRO!] Saldo insuficiente para saque. Saldo atual: R$${this.balance}.`);
            return;
        }
        this.balance -= amount;
        console.log(`Saque de R$${amount} efetuado com sucesso. Saldo restante: R$${this.balance}.`);
    }
}

const conta1 = new BankAccount('Chapolin Colorado');

conta1.deposit(500);
conta1.withdraw(500);
conta1.deposit(30);
conta1.withdraw(15);

