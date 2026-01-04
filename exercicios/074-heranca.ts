/*
Exercício 4 — Polimorfismo com herança
- Crie uma classe base chamada Shape com um método getArea() que retorna 0.
- Crie duas classes Rectangle e Circle que herdam de Shape e implementam o cálculo correto da área.
- Crie um array de Shape, adicione instâncias de Rectangle e Circle e exiba no console a área de cada forma.
*/

class Shape {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    getArea(): number {
        return 0;
    }
}

class Rectangle extends Shape {

    constructor(name: string, private base: number, private height: number) {
        super(name);
    }
    
    override getArea(): number {
        return this.base * this.height;
    }
}

class Circle extends Shape {
    protected PI: number = 3.14;

    constructor(name: string, private raio: number) {
        super(name);
    }
        
    override getArea(): number {
        return this.PI * (this.raio ** 2);
    }
}

const shapes: Shape[] = [
    new Rectangle('Retângulo', 10, 6), // A = 10 * 6;
    new Circle('Círculo', 6) // A = 3.14 * 6^2
]

shapes.forEach(shape => {
    console.log(`Área do ${shape.name}: ${shape.getArea()} m².`);
})