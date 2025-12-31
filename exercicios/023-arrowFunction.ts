/* Arrow function de verificação de maioridade. Crie uma arrow function que receba a idade de uma pessoa e retorne "Maior de idade" ou "Menor de idade". */

const verificarMaioridade = (idade: number): string => {
    if (idade < 0 || idade > 120) {
        return 'Idade inválida!'
    }
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

console.log(verificarMaioridade(15)); // Menor de idade
console.log(verificarMaioridade(18)); // Maior de idade
console.log(verificarMaioridade(-5)); // Idade inválida!
console.log(verificarMaioridade(121)); // Idade inválida!