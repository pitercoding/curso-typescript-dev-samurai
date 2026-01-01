/* Crie uma função que receba um valor booleano indicando se o usuário está logado e imprima uma mensagem correspondente. */

function isUserLogged(resp: boolean): string {
    return resp ? 'Usuário logado!' : 'Faça log in!'
}

console.log(isUserLogged(true)); // Usuário logado!
console.log(isUserLogged(false)); // Faça log in!