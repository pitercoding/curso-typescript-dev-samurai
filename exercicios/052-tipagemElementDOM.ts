/* <img> — HTMLImageElement: Crie uma imagem no HTML com um id. No TypeScript, selecione a imagem, tipando corretamente, e altere dinamicamente o src quando a página carregar. */

const img = document.querySelector('#img');
if (img instanceof HTMLImageElement) {
    window.addEventListener('load', () => {
        img.src = 'https://via.placeholder.com/150';
    })
}