/* 
Método que retorna valor
Objetivo: Criar métodos que retornam informações calculadas ou processadas.
- Crie uma classe chamada Rectangle com as propriedades:
width (number)
height (number)
- Crie um método area() que retorna a área do retângulo (width * height)
- Crie um método perimeter() que retorna o perímetro do retângulo (2 * (width + height))
- Crie uma instância da classe e exiba no console o resultado dos métodos
*/

class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const retangulo1 = new Rectangle(10, 20);

console.log(`Área do retângulo: ${retangulo1.area()}`);
console.log(`Perímetro do retângulo: ${retangulo1.perimeter()}`);