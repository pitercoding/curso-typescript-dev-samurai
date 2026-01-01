/* Crie um enum para o status de um pedido (PENDENTE, PAGO, CANCELADO) e imprima uma mensagem conforme o status. */

enum StatusDoPedido {
    Pendente = "PENDENTE",
    Pago = "PAGO",
    Cancelado = "CANCELADO"
}

function statusDoPedido(status: StatusDoPedido): void {
    console.log(`O status do pedido é: ${status}`);
}

statusDoPedido(StatusDoPedido.Cancelado);
statusDoPedido(StatusDoPedido.Pago);
statusDoPedido(StatusDoPedido.Pendente);