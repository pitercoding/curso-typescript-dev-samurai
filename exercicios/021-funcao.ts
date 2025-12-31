/* Função para calcular área do retângulo. Crie uma função que receba largura e altura e retorne a área do retângulo. */

function calcularAreaDoRetangulo(base: number, altura: number): string {
    const area = base * altura;
    return `Área = ${area}cm²`;
}

console.log(calcularAreaDoRetangulo(4, 10)); // Área = 40cm²