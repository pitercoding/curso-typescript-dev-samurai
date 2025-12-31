const idadeAtual: number = 0;
const cartaoDeCredito: boolean = true;
const permissaoDosPais: boolean = true;

// Função de pagamento como arrow function
const pagar = (total: number, cartaoDeCredito: boolean): string => {
  const response = { error: false };
  return response.error
    ? "Falha no pagamento!"
    : "Compra efetuada com sucesso!";
};

// Verificação de idade e permissão
if (idadeAtual >= 18 && cartaoDeCredito) {
  alert(pagar(100, cartaoDeCredito));
} else if (idadeAtual < 18 && permissaoDosPais && cartaoDeCredito) {
  alert(pagar(100, cartaoDeCredito));
} else {
  alert("Usuário menor de idade e sem permissão para efetuar a compra!");
}
