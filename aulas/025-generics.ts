// Generics permitem criar estruturas reutilizáveis que funcionam com vários tipos, mantendo segurança de tipos.

/* ======================================================
   GENERICS — EXEMPLOS PRÁTICOS
   ====================================================== */

/* ---------- 1. Array tipado com Generics ---------- */

// Forma explícita de tipar um array de strings
const nomes: Array<string> = ["Maria", "Cláudio"];


/* ---------- 2. Tipo simples (sem Generics) ---------- */

// Tipo específico para representar um usuário
type User = {
    name: string;
    age: number;
};

// Array de usuários tipado explicitamente
const userList: Array<User> = [
    { name: "Maria", age: 25 },
    { name: "Cláudio", age: 30 },
];


/* ---------- 3. Tipo SEM Generics (limitado a User) ---------- */

// Estrutura de paginação criada APENAS para User
// Não é reutilizável para outros tipos
type UserPage = {
    list: Array<User>;
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
};


/* ---------- 4. Problema: duplicação de código ---------- */

// Se precisarmos paginar outro tipo (ex: Car),
// teríamos que criar OUTRO tipo quase igual

type Car = {
    model: string;
    year: number;
};

type CarPage = {
    list: Array<Car>;
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
};


/* ---------- 5. Solução: Generic Page<T> ---------- */

// Generic T representa "qualquer tipo"
// O tipo real será definido no momento do uso
type Page<T> = {
    list: Array<T>;
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
};


/* ---------- 6. Uso do Generic Page<T> ---------- */

// Simulação de funções que retornam dados paginados
declare function getUsers(params: { page: number }): Page<User>;
declare function getCars(params: { page: number }): Page<Car>;

// Aqui o TypeScript substitui T por User
const usersPage: Page<User> = getUsers({ page: 1 });

// Aqui o TypeScript substitui T por Car
const carsPage: Page<Car> = getCars({ page: 2 });