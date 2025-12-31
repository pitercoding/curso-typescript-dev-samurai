/* Crie uma função que receba a idade de uma pessoa e imprima se ela pode tirar carteira de motorista (idade >= 18).*/

function podeTirarCNH(idade: number) {
    if (idade >= 18) {
        return 'Pode tirar a CNH'
    } else {
        return 'Não pode tirar a CNH. Não possui idade mínima'
    }
}

console.log(podeTirarCNH(17)); // Não pode tirar a CNH. Não possui idade mínima
console.log(podeTirarCNH(20)); // Pode tirar a CNH