/* Crie um enum para os dias da semana e uma função que receba um dia e imprima seu nome. */

enum DiasDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

function imprimirDiaDaSemana(dia: DiasDaSemana): void {
    console.log(`O dia escolhido foi ${DiasDaSemana[dia]}`);
}

imprimirDiaDaSemana(DiasDaSemana.Quinta);