/* Crie uma variável que possa receber valores de diferentes tipos e imprima seu valor. */

const qualquerTipo = (v: any): void => {
    console.log(`Imprimindo o valor passado: ${v}`);
}

qualquerTipo('Oi!');
qualquerTipo(4);
qualquerTipo(true);
qualquerTipo({});
qualquerTipo([]);