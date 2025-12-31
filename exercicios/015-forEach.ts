/* Crie um array de nomes e use forEach para imprimir uma mensagem: Olá, Ana / Olá, João */

const names: string [] = [
    'Chapolin', 
    'Tripa Seca', 
    'Quase Nada', 
    'Poucas Trancas', 
    'Pirata Alma Negra'
];

names.forEach(name => {
    console.log(`Olá, ${name}!`);
});

/*
Olá, Chapolin!
Olá, Tripa Seca!
Olá, Quase Nada!
Olá, Poucas Trancas!
Olá, Pirata Alma Negra!
*/