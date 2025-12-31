/* Crie uma função que receba um número de 1 a 7 e retorne o dia da semana correspondente. */

function diaDaSemana(dia: number): string {
    if (dia < 1 || dia > 7) {
        return 'Dia inválido! Informe um número de 1 a 7.';
    }

    switch (dia) {
        case 1: return 'Domingo';
        case 2: return 'Segunda-feira';
        case 3: return 'Terça-feira';
        case 4: return 'Quarta-feira';
        case 5: return 'Quinta-feira';
        case 6: return 'Sexta-feira';
        case 7: return 'Sábado';
        default: return 'Dia inválido!'
    }
}

console.log(diaDaSemana(0)); // Dia inválido! Informe um número de 1 a 7.
console.log(diaDaSemana(1)); // Domingo
console.log(diaDaSemana(2)); // Segunda-feira
console.log(diaDaSemana(3)); // Terça-feira
console.log(diaDaSemana(4)); // Quarta-feira
console.log(diaDaSemana(5)); // Quinta-feira
console.log(diaDaSemana(6)); // Sexta-feira
console.log(diaDaSemana(7)); // Sábado
console.log(diaDaSemana(8)); // Dia inválido! Informe um número de 1 a 7.
