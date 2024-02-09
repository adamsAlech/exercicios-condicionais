/*Exercício 12

## Dia da Semana

**a)** Sabendo que a semana possui 7 dias, sendo 1 para **segunda** 
e 7 para **domingo**, faça um programa que verifica o número armazenado 
em uma variável e imprima o dia (por extenso) da semana correspondente. 

Faça commit do programa.

**b)** Crie uma verificação padrão para caso o número informado 
não esteja no intervalo de 1 a 7.
*/

const diaDaSemana = 3;

if (diaDaSemana === 1) {
    console.log('Segunda-Feira');
} else if (diaDaSemana === 2) {
    console.log('Terça-Feira');
} else if (diaDaSemana === 3) {
    console.log('Quarta-Feira');
} else if (diaDaSemana === 4) {
    console.log('Quinta-Feira');
} else if (diaDaSemana === 5) {
    console.log('Sexta-Feira');
} else if (diaDaSemana === 6) {
    console.log('Sábado');
} else if (diaDaSemana === 7) {
    console.log('Domingo');
}