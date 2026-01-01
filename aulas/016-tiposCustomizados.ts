enum Gender {
  Male,
  Female,
}

enum Roles {
  Admin,
  StandardUser,
}

type User = {
  name: string;
  age: number;
  gender: Gender;
  role: Array<Roles>;
  hairColor?: string /* ? faz ser opcional */;
};

const getUserNameAndAge = (user: User): [string, number] => {
  return [user.name, user.age];
};

getUserNameAndAge({
  name: "Clara",
  age: 23,
  gender: Gender.Female,
  role: [Roles.Admin],
});


const users: Array<User> = [
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
];