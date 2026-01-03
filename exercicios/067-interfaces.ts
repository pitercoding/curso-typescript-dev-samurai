/*
Exercício 1 — Sistema de Pagamento
Objetivo: Entender como interfaces definem um contrato comum.
** Crie uma interface chamada PaymentMethod com:
- Um método pay(amount: number): void
** Crie duas classes que implementam essa interface:
- CreditCardPayment
- PixPayment
** Cada classe deve:
- Implementar o método pay
- Exibir no console o valor pago e o tipo de pagamento utilizado
** Crie uma função que receba um array de PaymentMethod e execute o pagamento para cada um.
*/

interface PaymentMethod {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
    cartaoDeCredito: string = "Cartão de Crédito";

    pay(amount: number): void {
        console.log(`R$${amount} foram pagos com ${this.cartaoDeCredito}`);
    }
}

class PixPayment implements PaymentMethod {
    pix: string = "PIX";

    pay(amount: number): void {
        console.log(`R$${amount} foram pagos com ${this.pix}`);
    }
}

const cartao: CreditCardPayment = new CreditCardPayment();
const pix: PixPayment = new PixPayment();

function pagar(formasDePagamento: Array<PaymentMethod>) {
    formasDePagamento.forEach((formasDePagamento) => formasDePagamento.pay(300));
}

pagar([cartao, pix]);