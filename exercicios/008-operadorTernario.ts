/* Crie uma função que receba a idade de uma pessoa e retorne "Maior de idade" ou "Menor de idade" usando operador ternário. */

function maioridade(idade: number) {
    if (idade < 0 || idade > 120) {
        return 'Idade inválida';
    }

    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

console.log(maioridade(-1)); // Idade inválida
console.log(maioridade(121)); // Idade inválida
console.log(maioridade(17)); // Menor de idade
console.log(maioridade(18)); // Maior de idade