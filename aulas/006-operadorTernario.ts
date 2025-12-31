enum Genero {
    MASCULINO = 'MASCULINO',
    FEMININO = 'FEMININO'
};

const nome: string = 'Chapolin Colorado';
const idade: number = 33;
const genero: Genero = Genero.MASCULINO;

const prefix = genero === Genero.MASCULINO ? 'Sr.' : 'Sra.';

console.log(`Olá, ${prefix} ${nome}`); // Olá, Sr. Chapolin Colorado