/* <select> — HTMLSelectElement: Crie um select com algumas opções no HTML. No TypeScript, selecione o elemento, tipando corretamente, e imprima no console a opção selecionada sempre que o valor mudar. */

const select = document.querySelector('#select');
if (select instanceof HTMLSelectElement) {
    select.addEventListener('change', () => {
        console.log('Opção selecionada:', select.value);
    })
}