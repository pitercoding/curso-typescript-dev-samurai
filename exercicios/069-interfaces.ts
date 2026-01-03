/*
Exercício 3 — Sistema de Impressão
Objetivo: Simular um cenário real de dispositivos diferentes.
** Crie uma interface chamada Printer com:
- Um método print(document: string): void
** Crie duas classes:
- InkjetPrinter
- LaserPrinter
** Cada classe deve:
- Implementar o método print
- Informar no console o tipo de impressora e o documento impresso
** Crie uma função que receba um Printer e imprima um documento.
*/

interface Printer {
    type: string;
    print(document: string): void;
}

class InkjetPrinter implements Printer {
    type: string = "Inkjet";

    print(document: string): void {
        console.log(`${document} impresso com a impressora ${this.type}.`);
    }
}

class LaserPrinter implements Printer {
    type: string = "Laser";

    print(document: string): void {
        console.log(`${document} impresso com a impressora ${this.type}.`);
    }
}

const inkjet: Printer = new InkjetPrinter();
const laser: Printer = new LaserPrinter();

function imprimir(printer: Printer, document: string) {
    printer.print(document);
}

imprimir(inkjet, "Relatório de vendas");
imprimir(laser, "Contrato de prestação de serviços");