/* <a> — HTMLAnchorElement: Crie um link no HTML com um id. No TypeScript, selecione o link, tipando corretamente, e altere o href para outro endereço ao clicar nele, impedindo a navegação padrão. */

const a = document.querySelector('#a');
if (a instanceof HTMLAnchorElement) {
    a.addEventListener('click', e => {
        e.preventDefault(); // evita navegação
        a.href = 'https://www.example.com';
        console.log('Link alterado para:', a.href);
    })
}