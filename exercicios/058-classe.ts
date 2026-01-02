/* 
Classe com estado interno
Crie uma classe chamada Counter com: 
- Uma propriedade value do tipo number (inicia em 0).
A classe deve possuir:
- Um método increment que aumenta value em 1
- Um método decrement que diminui value em 1
- Um método getValue que retorna o valor atual
Crie uma instância da classe e teste os métodos no console. 
*/

class Counter {
    value: number = 0;

    constructor(){
        
    }

    increment(): void {
        this.value += 1;
    }

    decrement(): void {
        this.value -= 1;
    }

    getValue(): number {
        return this.value;
    }
}

const contador: Counter = new Counter();

contador.increment();
contador.increment();
console.log(contador.getValue()); // 2

contador.decrement();
contador.decrement();
contador.decrement();
contador.decrement();
contador.decrement();
console.log(contador.getValue()); // -3