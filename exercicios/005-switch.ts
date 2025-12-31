function centralDeAtendimento(option: number) {
  switch (option) {
    case 1:
      return "Falar sobre pagamentos.";
    case 2:
      return "Falar sobre seguros.";
    case 3:
      return "Falar sobre acidentes.";
    case 4:
      return "Sair";
    default:
      return "Aguardar para falar com atendente";
  }
}

console.log(centralDeAtendimento(2));