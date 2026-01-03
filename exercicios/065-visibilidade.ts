/* 
Exercício 4 — Controle de Login
** Crie uma classe chamada User com:
- Um atributo privado password (string)
- Um atributo público username (string)
** A classe deve possuir:
- Um método público login(password: string) que valida a senha
- Um método privado checkPassword(password: string) que compara a senha correta
** A senha nunca pode ser acessada diretamente fora da classe.
*/

class User {
  public username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  private checkPassword(password: string): boolean {
    return this.password === password ? true : false;
  }

  public login(password: string): string {
    if (!this.checkPassword(password)) {
      return `${this.username} Senha incorreta! Tente novamente.`;
    }
    return `${this.username} logou com sucesso!`;
  }
}

const user: User = new User("Racha Cuca", "BEXX1234");

console.log(user.login('12345'));
console.log(user.login('BEXX1234'));
