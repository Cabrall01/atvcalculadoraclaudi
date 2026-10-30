// 1. Perguntar o valor total da conta consumida na mesa
const valorTotalInput = prompt("Digite o valor total da conta (R$):");
const valorTotal = parseFloat(valorTotalInput ? valorTotalInput.replace(",", ".") : "0");

// 2. Perguntar em quantas pessoas a conta será dividida
const quantidadePessoasInput = prompt("Digite a quantidade de pessoas para dividir a conta:");
const quantidadePessoas = parseInt(quantidadePessoasInput, 10);

// Validação dos dados inseridos
if (!isNaN(valorTotal) && !isNaN(quantidadePessoas) && quantidadePessoas > 0 && valorTotal >= 0) {
    // 3. Calcular o valor por pessoa
    const valorPorPessoa = valorTotal / quantidadePessoas;

    // Formatação de valores com duas casas decimais
    const consumoFormatado = valorTotal.toFixed(2);
    const divisaoFormatada = valorPorPessoa.toFixed(2);

    // 4. Exibir o resultado final em um único alert bem formatado
    alert(
        `--- Resumo da Conta ---
` +
        `Consumo: R$ ${consumoFormatado}
` +
        `Divisão por pessoa (${quantidadePessoas} pessoas): R$ ${divisaoFormatada}`
    );
} else {
    alert("Por favor, insira valores válidos para o cálculo.");
}
