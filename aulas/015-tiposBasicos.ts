/* =============== String =============== */
const texto: string = "um texto qualquer";

function imprimirTexto(texto: string): void {
  console.log(texto);
}
console.log(texto);

/* =============== Number =============== */
const exemplo1: number = 25;
const exemplo2: number = 1.5;

function nomeDaFuncao1(exemplo1: number, exemplo2: number): number {
  return exemplo1 + exemplo2;
}
console.log(nomeDaFuncao1(exemplo1, exemplo2)); // 26.5

/* =============== Boolean =============== */
const bool1: boolean = true;
const bool2: boolean = false;

const nomeDaFuncao2 = (bool1: boolean, bool2: boolean): boolean => {
  return bool1 && bool2;
};
console.log(nomeDaFuncao2(bool1, bool2)); // false

/* =============== Array =============== */
const arr1: Array<string> = ["Gui", "Ana", "Bia"];

const listarNomes = (arr1: string[]): void => {
  arr1.forEach((nome) => console.log(nome));
};
listarNomes(arr1);

/* =============== Enum =============== */
enum PaymentMethods {
  CreditCard = "crerdit_card",
  DebitCard = "debit_card",
  Transfer = "bank_transfer",
}

/* =============== Tuple =============== */

// Tipo do cliente
type Cliente = {
  nome: string;
  idade: number;
};

// Objeto do tipo Cliente
const cliente: Cliente = {
  nome: "Tripa Seca",
  idade: 33,
};

// Função que recebe um Cliente e retorna uma Tuple
const pegarDadosDoCliente = (user: Cliente): [string, number] => {
  return [user.nome, user.idade];
};

// Tuple criada a partir da função
const listaGeral: [string, number] = pegarDadosDoCliente(cliente);

// Uso
console.log(listaGeral); // ["Tripa Seca", 33]
console.log(listaGeral[0]); // Tripa Seca
console.log(listaGeral[1]); // 33

/* =============== Unkown (qualquer tipo de valor) =============== */
const nomeDinamico: unknown = 25
const idadeDinamico: unknown = "Quase Nada"

/* =============== Any (qualquer tipo de valor mas remove typeset)=============== */
let valorQualquer: any;

valorQualquer = 10;
console.log(valorQualquer); // 10

valorQualquer = "Olá";
console.log(valorQualquer); // Olá

valorQualquer = true;
console.log(valorQualquer); // true

// Simulando um retorno de algo externo (API ou biblioteca sem tipagem)
function metodoExterno() {
  return "Resposta da API";
}

const resposta: any = metodoExterno();

console.log(resposta);          // "Resposta da API"
console.log(resposta.toUpperCase()); // FUNCIONA


/* =============== Void =============== */
function mostrarMensagem(): void {
    console.log("Olá, TypeScript!");
}

mostrarMensagem(); // Olá, TypeScript!

const avisar = (): void => {
  console.log("Atenção!");
};