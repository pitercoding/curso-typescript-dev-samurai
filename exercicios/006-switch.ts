/* Crie uma função que receba a cor de um semáforo ("vermelho", "amarelo", "verde") e retorne a ação correspondente ("Pare", "Atenção", "Siga"). */

function acaoSemaforo(cor: string): string {
    const c = cor.toLocaleLowerCase();

    if (c !== 'vermelho' && c !== 'amarelo' && c !== 'verde') {
        return 'ERRO! Essa cor não existe no semáforo.';
    }

    switch (c) {
        case 'vermelho': return 'Pare!';
        case 'amarelo': return 'Atenção!';
        case 'verde': return 'Siga!';
        default: return 'Cor inválida!';
    }
}

console.log(acaoSemaforo('VERMELHO')); // Pare!
console.log(acaoSemaforo('Amarelo'));  // Atenção!
console.log(acaoSemaforo('vErde'));    // Siga!
console.log(acaoSemaforo('azul'));     // ERRO! Essa cor não existe no semáforo.