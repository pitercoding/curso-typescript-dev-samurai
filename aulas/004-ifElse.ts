function comprarIngresso(
  age: number,
  creditCard: boolean,
  parentalPermission: boolean
) {
  if (age >= 18 && creditCard) {
    alert("Usuário maior de idade, com permissão.");
  } else if (age < 18 && parentalPermission && creditCard) {
    alert("Usuário menor de idade, com permissão.");
  } else {
    alert("Usuário menor de idade, sem permissão.");
  }
}

comprarIngresso(16, true, true);
