/* Qualquer HTML — HTMLElement: Crie um elemento genérico (ex: <div> ou <p>) com um id. No TypeScript, selecione esse elemento, tipando corretamente como HTMLElement, e altere seu texto ou estilo quando a página carrega */

const p = document.querySelector('#p');
if (p instanceof HTMLElement) {
    p.style.backgroundColor = 'yellow';
    p.innerText = 'Alterado pelo TypeScript';
}