let usuario: string = 'Carlos';
let fome: boolean = true;
let pratos: number = 3;

while (fome) {
    console.log(`${usuario} está comendo...`);
    pratos--;

    if (pratos === 0) {
        fome = false;
    }
}

console.log(`${usuario} comeu o suficiente e está satisfeito.`);


/*
Carlos está comendo...
Carlos está comendo...
Carlos está comendo...
Carlos comeu o suficiente e está satisfeito.
*/