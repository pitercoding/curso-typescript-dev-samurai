/* Crie uma função que receba um valor unknown e informe se ele é uma string ou um número. */

function stringOrNumber(v: unknown): void {
    if (typeof v === 'string') {
        console.log(`O valor é uma string de tamanho ${v.trim().length}`);
    } else if (typeof v === 'number') {
        console.log(`O valor é um number e seu dobro é ${v * 2}`);
    } else {
        console.log(`O valor não é uma String e nem um Number!`);
    }
}

stringOrNumber("Olá mundo!"); // O valor é uma string de tamanho 9
stringOrNumber(42);           // O valor é um número, e seu dobro é 84
stringOrNumber(true);         // O valor não é uma String e nem um Number!
stringOrNumber({});           // O valor não é uma String e nem um Number!
