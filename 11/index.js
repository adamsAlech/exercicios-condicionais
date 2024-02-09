/*Exercício 11

## Valor da parcela do Sucesso Compartilhado

Na Cubos Academy alguns estudantes podem fazer o Curso de Desenvolvimento de Software e
só começar a pagar após finalizado o curso quando (e se) tiverem obtido renda acima de 
R$ 2.000,00. Nesse caso o valor da parcela a ser paga é de 18% do valor da renda mensal 
da pessoal.

Após 60 meses, independente de ter quitado ou não o valor total do curso (de R$ 18.000,00) 
a pessoa não deve nada, ou seja, o valor da parcela é zero.

**a)** Faça um programa que calcula o valor da parcela a ser paga pelo aluno. Imprima 
uma mensagem bonita na tela, com o valor em reais.

Faça commit do programa.

**b)** Altere o seu programa anterior para que, quando o valor da parcela a ser pago for 0, 
a mensagem explique porque o aluno não precisa pagar nada naquele mês.

*/


//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 500_000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual 
//a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1_000_000;

const totalAPagar = (rendaMensalEmCentavos * 0.18);


if (mesesDecorridos === 60) {
    console.log('ALUNO ISENTO DE PAGAMENTO DE PARCELA, POIS JÁ VENCEU O PRAZO DE CARENCIA');

} if (totalJaPagoPeloAluno === 1_800_000) {
    console.log(`O ALUNO JÁ QUITOU O CURSO`);

} if (mesesDecorridos >= 12 && mesesDecorridos < 60 && totalJaPagoPeloAluno < 1_800_000 && rendaMensalEmCentavos >= 200_000) {
    console.log(`O VALOR TOTAL DA PARCELA É R$ ${totalAPagar}`);

} if (mesesDecorridos >= 12 && mesesDecorridos < 60 && totalJaPagoPeloAluno < 1_800_000 && rendaMensalEmCentavos < 200_000) {
    console.log(`O ALUNO NÃO PAGA A MENSALIDADE ESSE MÊS PORQUE NÃO ATINGIU O VALOR MINIMO DE GANHOS SALARIAL`)

} if (mesesDecorridos < 12) {
    console.log(`O ALUNO AINDA NÃO CONCLUIU O CURSO, PORTANTO NÃO TEM PARCELA A PAGAR`);
}

