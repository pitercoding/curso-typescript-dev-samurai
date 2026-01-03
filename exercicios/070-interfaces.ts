/*
Exercício 4 — Sistema de Notificações
Objetivo: Aplicar interfaces em comunicação (caso real).
** Crie uma interface chamada Notification com:
- Um método send(message: string): void
** Crie duas classes:
- EmailNotification
- SmsNotification
** Cada classe deve:
- Implementar o método send
- Exibir no console a mensagem enviada e o tipo de notificação
** Crie uma função que receba um array de Notification e envie uma mensagem para todos.
*/

interface Notification {
    type: string;
    send(message: string): void;
}

class EmailNotification implements Notification {
    type: string = "Email";

    send(message: string): void {
        console.log(`Enviado por ${this.type}: "${message}"`);
    }
}

class SmsNotification implements Notification {
    type: string = "SMS";

    send(message: string): void {
        console.log(`Enviado por ${this.type}: "${message}"`);
    }
}

const email: Notification = new EmailNotification();
const sms: Notification = new SmsNotification();

function enviarNotificacoes(notificacao: Array<Notification>) {
    notificacao.forEach((n) => n.send("Olá, mundo!"))
}

enviarNotificacoes([email, sms]);