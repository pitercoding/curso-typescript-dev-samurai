/* <form> — HTMLFormElement: Crie um formulário simples no HTML. No TypeScript, selecione o formulário, tipando corretamente, e intercepte o envio (submit) para impedir o comportamento padrão e exibir no console: "Formulário enviado" .*/

const form = document.querySelector('#form');
if (form instanceof HTMLFormElement) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        console.log('Formulário enviado');
    })
}