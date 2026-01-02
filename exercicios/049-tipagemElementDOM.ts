/* <input> — HTMLInputElement: Crie um input de texto no HTML com um id. No TypeScript, selecione esse input, tipando corretamente, e imprima no console o valor digitado sempre que o usuário escrever algo. */

const input = document.querySelector('#input');
if (input instanceof HTMLInputElement) {
    input.addEventListener('input', () => {
        console.log(input.value)
    });
}