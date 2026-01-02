/* 
Classe com regra simples (lógica)
Crie uma classe chamada Product com as propriedades:
- name (string)
- price (number)
A classe deve possuir:
- Um constructor
- Um método chamado applyDiscount que recebe um valor percentual (number) e retorna o preço com desconto aplicado.
Exemplo: Se o preço for 100 e o desconto for 10, o método deve retornar 90.
*/

class Product {
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }

    applyDiscount(discount: number): number {
        const finalValue = this.price - (this.price * discount / 100);
        return finalValue;
    }
}

const ipad: Product = new Product('Ipad', 2000);
console.log(ipad.applyDiscount(10)); // 1800