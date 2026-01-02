/* =============================
   TIPOS EXTERNOS (LIBRARIES)
============================= */

/*
1️⃣ Bibliotecas externas podem fornecer seus próprios tipos
   automaticamente ou via @types.
*/

// Exemplo: React
// npm install react
// npm install @types/react --save-dev


// Exemplo: Axios
// comando para instalar: npm install axios

// import axios from 'axios';

// axios.get('https://api.exemplo.com/users')
//   .then(response => {
       // TypeScript já sabe o tipo básico
//     console.log(response.data);
//   });


/*
2️⃣ Quando a biblioteca NÃO possui types
   Temos 3 opções:
*/

/*
❌ Opção 1: Usar `any`
   - Funciona
   - NÃO recomendado
*/

/*
✅ Opção 2: Criar arquivos .d.ts
   - Descrever os tipos manualmente
   - Melhor prática
*/

/*
📁 Exemplo de estrutura:
src/
 ├─ types/
 │   └─ nome-da-lib.d.ts
*/

/*
Exemplo de declaração:
declare module 'nome-da-lib' {
  export function exemplo(): void;
}
*/

/*
3️⃣ Tipos externos permitem:
- Autocomplete
- Validação de tipos
- Menos erros em runtime
*/
