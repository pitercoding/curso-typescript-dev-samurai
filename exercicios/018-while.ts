/* Simule um usuário com 3 tentativas de login usando while. A cada tentativa, imprima: Tentativa X */

let tentativasRestantes: number = 3;

while (tentativasRestantes > 0) {
    console.log(`Tentativa ${tentativasRestantes}`);
    tentativasRestantes--;
}

/*
Tentativa 3
Tentativa 2
Tentativa 1
*/