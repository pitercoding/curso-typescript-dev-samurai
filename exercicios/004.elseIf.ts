/* 
Crie uma função que receba a idade de uma pessoa e retorne:
"Criança" até 12 anos
"Adolescente" até 17 anos
"Adulto" até 64 anos
"Idoso" 65 anos ou mais
*/

function faixaEtaria(idade: number) {
    if (idade < 0 || idade > 120) {
        return `Idade inválida! Informe uma idade entre 0 e 120 anos.`
    } else if (idade <= 12) {
        return `Com ${idade} anos você é criança.`
    } else if (idade <= 17) {
        return `Com ${idade} anos você é adolescente.`
    } else if (idade <= 64) {
        return `Com ${idade} anos você é adulto.`
    } else {
        return `Com ${idade} anos você é idoso.`
    }
}

console.log(faixaEtaria(-1)); // Idade inválida! Informe uma idade entre 0 e 120 anos.
console.log(faixaEtaria(121)); // Idade inválida! Informe uma idade entre 0 e 120 anos.
console.log(faixaEtaria(12)); // Com 12 anos você é criança.
console.log(faixaEtaria(16)); // Com 16 anos você é adolescente.
console.log(faixaEtaria(55)); // Com 55 anos você é adulto.
console.log(faixaEtaria(70)); // Com mais de 70 anos você é idoso.