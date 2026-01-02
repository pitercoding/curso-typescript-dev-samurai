/* Uso de type. Crie um tipo chamado Color que só aceite as cores "red", "green" ou "blue". Em seguida, declare uma variável favoriteColor usando esse tipo e atribua uma das cores permitidas. */

type Color = 'red' | 'green' | 'blue';

const favoriteColor = (cor: Color): string => {
    return `Cor favorita: ${cor}`;
};

console.log(favoriteColor('red'));
console.log(favoriteColor('green'));
console.log(favoriteColor('blue'));