/* Tipagem básica com querySelector */
const title1 = document.querySelector('h1'); // Tipo inferido pelo TS: Element | null

/* Tipando corretamente com HTMLElement */
const title2 = document.querySelector('h1') as HTMLElement; // TS sabe que isso é um elemento HTML
title2.innerText = 'Olá, TypeScript!';

/* Forma correta e segura (recomendada) */
const title3 = document.querySelector('h1');
if (title3 instanceof HTMLElement) {
    title3.innerText = 'Olá, TypeScript!';
}

/* Tipando elementos específicos (muito importante) */
const input = document.querySelector('#name');
if (input instanceof HTMLInputElement) {
    console.log(input.value);
}

const button = document.querySelector('#send');
if (button instanceof HTMLButtonElement) {
    button.disabled = true;
}

const form = document.querySelector('form');
if (form instanceof HTMLFormElement) {
    form.addEventListener('submit', e => {
        e.preventDefault();
    })
}

/* Forma curta (quando se tem certeza que existe) */
const input2 = document.querySelector('#email') as HTMLInputElement;
console.log(input2.value);

const input3 = document.querySelector('#email')!; // Ou usando ! (non-null assertion): Se o elemento não existir → erro em runtime

/* getElementById já vem tipado */
const input4 = document.getElementById('email');

if (input4 instanceof HTMLInputElement) { 
  console.log(input4.value); // Tipo inferido pelo TS: Element | null
}

/*

Elemento HTML	Tipo TS
<input>	        HTMLInputElement
<button>	    HTMLButtonElement
<form>	        HTMLFormElement
<img>	        HTMLImageElement
<a>	            HTMLAnchorElement
<select>	    HTMLSelectElement
Qualquer HTML	HTMLElement

*/