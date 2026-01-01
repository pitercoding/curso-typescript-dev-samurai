/* Crie uma tuple que represente um usuário contendo nome e idade. */

const user: [string, number, string, string] = [
  "Tripa Seca",
  33,
  "DE12345678",
  "tripaseca@email.com",
];

const mostrarUsuario = (u: [string, number, string, string]): void => {
  console.log(`
        Name: ${u[0]}, 
        Age: ${u[1]},
        Personal Id: ${u[2]},
        Email: ${u[3]}
        `);
};

mostrarUsuario(user);
