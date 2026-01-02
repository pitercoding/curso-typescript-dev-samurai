/* <button> — HTMLButtonElement: Crie um botão no HTML com um id. No TypeScript, selecione o botão, tipando corretamente, e ao clicar nele, exiba no console a mensagem: "Botão clicado com sucesso" */

const botao = document.querySelector('#botao');
if (botao instanceof HTMLButtonElement) {
    botao.addEventListener('click', () => {
        console.log('Botão clicado com sucesso');
    })
}