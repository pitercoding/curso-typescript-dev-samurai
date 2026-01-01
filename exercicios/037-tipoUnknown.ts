/* Crie uma função que receba um valor do tipo unknown e só permita operações após verificar seu tipo. */

function verificarTipo(val: unknown): void {
    if (typeof val === 'string') {
        console.log(`O valor é uma string de tamanho ${val.trim().length}`);
    } else if (typeof val === 'number') {
        console.log(`O valor é um number, e seu dobro é ${val * 2}`);
    } else if (typeof val === 'boolean') {
        console.log(`O valor é um boolean: ${val}`);
    } else {
        console.log(`Tipo de valor não suportado!`);
    }
}

// Testando:
verificarTipo("Olá mundo!"); // O valor é uma string de tamanho 9
verificarTipo(42);           // O valor é um número, e seu dobro é 84
verificarTipo(true);         // O valor é booleano: true
verificarTipo({});           // Tipo de valor não suportado