/* 
Crie uma função que receba a nota de um aluno (0 a 100) e retorne:
A se nota >= 90
B se nota >= 75
C se nota >= 60
D se nota < 60 
*/

function conceito(nota: number) {
    if (nota < 0 || nota > 100) { 
        return 'Nota inválida!';
    } else if (nota >= 90) {
        return `Sua nota foi ${nota}. Conceito final: A.`
    } else if (nota >= 75) {
        return `Sua nota foi ${nota}. Conceito final: B.`
    } else if (nota >= 60) {
        return `Sua nota foi ${nota}. Conceito final: C.`
    } else {
        return `Sua nota foi ${nota}. Conceito final: D.`
    }
}

console.log(conceito(90)); // Sua nota foi 90. Conceito final: A.
console.log(conceito(80)); // Sua nota foi 80. Conceito final: B.
console.log(conceito(65)); // Sua nota foi 65. Conceito final: C.
console.log(conceito(55)); // Sua nota foi 55. Conceito final: D.