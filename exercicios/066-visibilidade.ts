/* 
Exercício 5 — Produto com estoque
** Crie uma classe chamada Product com:
- Um atributo privado stock (number)
- Um atributo público name (string)
** A classe deve possuir:
- Um método público addStock(quantity: number)
- Um método público removeStock(quantity: number)
- Um método público getStock() para consultar a quantidade atual
** O estoque só pode ser alterado através dos métodos da classe.
*/

class Product {
    public name: string;
    private stock: number;

    constructor(name: string, stock: number){
        this.name = name;
        this.stock = stock;
        console.log(`Produto "${this.name}" registrado com estoque inicial: ${this.stock}`);
    }
    
    public getStock(): number {
        return this.stock;
    }

    public addStock(quantity: number): void {
        if (quantity <= 0) {
            console.log("Quantidade inválida para adicionar.");
            return
        }

        this.stock += quantity;
        console.log(`${quantity} unidade(s) adicionada(s). Estoque atual: ${this.stock}`);
    }

    public removeStock(quantity: number): void {
        if (quantity <= 0) {
            console.log('Quantidade inválida para remover.');
            return;
        } 
        
        if (quantity > this.stock) {
            console.log(`Estoque insuficiente. Tentativa de remover ${quantity}, mas só há ${this.stock}.`);
            return;
        }

        this.stock -= quantity;
        console.log(`${quantity} unidade(s) removida(s). Estoque atual: ${this.stock}`);
    }
}

const iPad: Product = new Product('iPad', 6);

iPad.getStock();        // 6
iPad.addStock(1);       // 7
iPad.removeStock(3);    // 4
iPad.removeStock(10);   // erro
iPad.addStock(-2);      // erro