/*Exercício 13

## Compra com Desconto

A Loja do Juninho está com uma super promoção. E na compra de qualquer produto você ganha desconto conforme a forma de pagamento seguindo a tabela seguinte.

| Forma de Pagamento | Desconto |
| ------------------ | -------- |
| credito            | 5%       |
| cheque             | 3%       |
| debito ou dinheiro | 10%      |

**a)** Faça um programa que verifica o tipo de desconto, calcule o valor do produto 
com o desconto e imprima o resultado. O valor final do produto após o desconto pode 
ser encontrado com a fórmula:

$$ valorFinal = valorDoProduto - (valorDoProduto \* desconto)$$

Lembre-se de cuidar para que o valor monetário tenha sempre duas casas decimais, apenas.*/

//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = 'credito';

//valor da mercadoria (centavos)
const valorDoProduto = 130;

if (tipoDePagamento === 'credito') {
    valorAPagar = valorDoProduto - (valorDoProduto * 0.05);
    valorAPagarFormatado = valorAPagar.toLocaleString('en-US', { style: 'currency', currency: 'BRL' });
    console.log(`O valor a ser pago ${valorAPagarFormatado}`);

} else if (tipoDePagamento === 'cheque') {
    valorAPagar = valorDoProduto - (valorDoProduto * 0.03);
    valorAPagarFormatado = valorAPagar.toLocaleString('en-US', { style: 'currency', currency: 'BRL' });
    console.log(`O valor a ser pago é ${valorAPagarFormatado}`);

} else if (tipoDePagamento === 'debito' || tipoDePagamento === 'dinheiro') {
    valorAPagar = valorDoProduto - (valorDoProduto * 0.10);
    valorAPagarFormatado = valorAPagar.toLocaleString('en-US', { style: 'currency', currency: 'BRL' });
    console.log(`O valor a ser pago é ${valorAPagarFormatado}`);
}