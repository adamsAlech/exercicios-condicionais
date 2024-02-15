/*Exercício 17

## Extrato de Compra Online

Dado o valor de um produto, a quantidade de parcelas escolhida e quanto 
já foi pago, faça um programa que ajude a Fernanda a saber o valor 
restante para pagamento e quantas parcelas faltam pagar. */

//valor do produto comprado.
const valorDoProduto = 1000;
valorDoProdutoFormatado = valorDoProduto.toLocaleString('de-DE', { style: 'currency', currency: 'BRL' });
//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;
valorPagoFormatado = valorPago.toLocaleString('en-US', { style: 'currency', currency: 'BRL' });
let restanteValorAPagar = valorDoProduto - valorPago;
restanteValorAPagarFormatado = restanteValorAPagar.toLocaleString('en-US', { style: 'currency', currency: 'BRL' });
let valorDaParcela = valorDoProduto / quantidadeDoParcelamento;
valorDaParcelaFormatado = valorDaParcela.toLocaleString('en-Us', { style: 'currency', currency: 'BRL' });
let quantidadeParcelasRestante = (valorDoProduto - valorPago) / valorDaParcela

console.log(`O valor total do produto comprado é de R$${valorDoProdutoFormatado}`);
console.log(`O produto foi parcelado em ${quantidadeDoParcelamento} vezes`);
console.log(`Já foi pago R$ ${valorPagoFormatado}`);
console.log(`O valor que falta para quitar o pamento do produto é de ${restanteValorAPagarFormatado}`);
console.log(`Faltam ${quantidadeParcelasRestante} parcelas no valor de ${valorDaParcelaFormatado}`);