enum Gender {
  Male = 'Male',
  Female = 'Female',
}

enum Roles {
  Admin = 'Admin',
  StandardUser = 'Standard User',
}

interface Vilao {
  name: string;
  age: number;
  gender: Gender;
  role: Array<Roles>;
  hairColor?: string /* ? faz ser opcional */;
};

const viloes: Array<Vilao> = [
    {
    name: "Tripa Seca",
    age: 33,
    gender: Gender.Male,
    role: [Roles.Admin],
  },
  {
    name: "Rosa, a Rumorosa",
    age: 25,
    gender: Gender.Female,
    role: [Roles.StandardUser],
    hairColor: "blonde" /* propriedade opcional */
  },
  {
    name: "Poucas Trancas",
    age: 45,
    gender: Gender.Male,
    role: [Roles.StandardUser],
    hairColor: "black" /* propriedade opcional */
  },
]

// retorna o enum com índice
const getViloes = (): Vilao [] => {
    return viloes;
}

const todosViloes = getViloes();
console.log(todosViloes);
console.log('==========================================================================================')

// retorna os valores
const getViloes2 = (): string[] => {
  return viloes.map(v => `Nome: ${v.name}, Idade: ${v.age}, Gênero: ${v.gender}, Papel No Sistema: ${v.role}, Cabelo: ${v.hairColor}`)
}

const todosViloes2 = getViloes2();
console.log(todosViloes2);