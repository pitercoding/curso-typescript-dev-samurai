/*
Exercício 4 — Interface genérica de resposta
Crie uma interface genérica chamada ApiResponse<T> que represente a resposta de uma API, contendo:
- data (tipo genérico)
- success (boolean)
- message (string)
Utilize essa interface para tipar a resposta de uma API de usuários e de uma API de pedidos.
*/

interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
}

const apiUsuarios: ApiResponse<string> = {
    data: "200",
    success: true,
    message: "Resposta recebida com sucesso!",
}

const apiPedidos: ApiResponse<number> = {
    data: 400,
    success: false,
    message: "[ERRO!] Servidor não respondendo!",
}

console.log(apiUsuarios);
console.log(apiPedidos);