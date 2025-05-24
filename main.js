let deposito = 0;
let saldo = 0;
let extrato = "";
let numeroSaques = 0;
let limiteSaques = 3;
let limiteValor = 500;

while (true) {
  let menu = prompt(`
        ===========================
        Selecione uma opção:
        [d] - Depósito
        [s] - Saque
        [e] - extrato
        [q] - sair
        ===========================
    `);

  if (menu == "d") {
    let valor = parseFloat(prompt("Informe o valor do depósito: R$"));
    if (valor > 0) {
      // saldo = saldo + valor;
      saldo += valor;
      extrato = extrato + `Depósito de R$ ${valor} /n`;
      // extrato += `Depósito de R$ ${valor}`;
    } else {
      alert("@@@ Operação falhou! O valor informado é inválido! @@@");
    }
  } else if (menu == "s") {
    let valor = parseFloat(prompt("Informe o valor do depósito: R$"));
    let excedeuSaque = numeroSaques >= limiteSaques;
    let exedeuLimiteValor = valor > 500;
    let exedeuSaldo = valor > saldo;
    if (exedeuSaldo) {
      alert("@@@ Operação Falhou! Você nâo tem saldo suficiente! @@@");
    } else if (excedeuSaque) {
      alert("@@@ Operação Falhou! numero máximo de saque foi excedido! @@@");
    } else if (execeuLimiteValor) {
      alert("@@@ Operação Falhou! Você nâo tem saldo suficiente! @@@");
    }else if (valor > 0){
        // saldo = saldo - valor;
        saldo -= valor;
    extrato = extrato + `Saque de R$ $ {valor} \n`
alert(`Saque de de ${valor} realizado com sucesso`)
    }
    if(menu == "d") {}
  } else if (menu == "s") {
  } else if (menu == "e") {
    let mensagem = extrato == " " ? "Não foram realizados movimentações." : extrato;
    alert(`
    ==== extrato =====
    ${mensagem}
    Saldo : R$ ${saldo.toFixed(2)}
    ===================

    `)

  }
  }

    
    //numero de saque > 3.
    // valor > 500.
    // não tiver saldo.
  


// Depósito:
// - Deve aceitar apenas valores **positivos**.
// - Todos os depósitos devem ser **armazenados** em memória.
// - O sistema considera apenas **um único usuário** (sem necessidade de autenticação ou identificação de conta).
// - Os depósitos devem aparecer no extrato.

// Saque:
//  - Permitir **no máximo 3 saques diários**.
// Cada saque pode ter o valor **máximo de R$ 500,00**.
// O sistema deve bloquear saques se o usuário não tiver saldo suficiente, exibindo mensagem:

// `Saldo insuficiente para saque.`

// Os saques devem ser armazenados e aparecer no extrato.

// Extrato:
// - Listar todas as **movimentações** (depósitos e saques) feitas.
// - No final da listagem, mostrar o **saldo atual**.
// - Formatar os valores no padrão brasileiro:

// Ex: `R$ 1500.45`

// - Se não houver movimentações, mostrar: `Não foram realizadas movimentações.`
