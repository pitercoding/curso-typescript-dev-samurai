/* 
Método simples sem retorno
Objetivo: Criar uma classe com um método que apenas executa uma ação.
- Crie uma classe chamada Lamp com a propriedade isOn (booleano, inicia como false)
- Crie um método turnOn que altera isOn para true e imprime "Lâmpada acesa"
- Crie um método turnOff que altera isOn para false e imprime "Lâmpada apagada"
- Crie uma instância da classe e teste os métodos no console
*/

class Lamp {
    isOn: boolean = false;

    turnOn(): void {
        this.isOn = true;
        console.log("Lâmpada acesa!");
    }

    turnOff(): void {
        this.isOn = false;
        console.log("Lâmpada apagada!");
    }
}

const lamp: Lamp = new Lamp();

lamp.turnOn();
lamp.turnOff();