/* Uso de propriedades opcionais (?). Crie um tipo chamado Book com title (string), author (string) e summary? (opcional, string). Depois, declare uma função que recebe um Book e imprime seu title e, se existir, o summary. */

type Book = {
  title: string;
  author: string;
  summary?: string;
};

const lordOfTheRings: Array<Book> = [
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    summary:
      'O jovem hobbit Frodo Bolseiro herda o Um Anel, um artefato poderoso e maligno criado pelo Senhor Sombrio Sauron. Para evitar que o mundo caia em trevas, Frodo parte do Condado em direção a Valfenda. Lá, forma-se a "Sociedade do Anel", composta por nove representantes das raças livres (homens, elfos, anões e hobbits), com a missão de levar o Anel até a Montanha da Perdição para destruí-lo. O livro termina com a dissolução do grupo após um ataque de Orcs.',
  },
  {
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
  },
  {
    title: "The Return of the King",
    author: "J.R.R. Tolkien",
    summary:
      "Sauron lança um ataque massivo contra Minas Tirith, a capital de Gondor. Aragorn assume sua linhagem real para liderar a resistência dos Homens e dar a Frodo uma chance de atravessar Mordor. Enquanto a batalha final ruge nos portões negros, Frodo e Sam alcançam a Montanha da Perdição. O Anel é finalmente destruído, Sauron é derrotado e Aragorn é coroado rei. O livro conclui com o retorno dos hobbits ao Condado e a partida de Frodo para as Terras Imortais.",
  },
];

const getBookDetails = (books: Book[]): string[] => {
  return books.map(b => `
    Title: ${b.title}
    Author: ${b.author} 
    Summary: ${b.summary ?? 'Not informed'}`);
};

getBookDetails(lordOfTheRings).forEach(book => {
  console.log(book);
});


