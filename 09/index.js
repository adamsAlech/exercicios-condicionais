/*## Transformar nota em conceito

Num colégio está sendo feita uma migração de notas (que variam de 0 a 10) para conceitos 
(que variam de A até E).

Para não perder o histórico de alunos antigos e mantê-lo condizente com a nova forma 
conceitual de avaliar, você deve fazer um programa que transforma uma nota em conceito, 
de acordo com a seguinte tabela:

| Nota        | Conceito |
| ----------- | -------- |
| 9 a 10      | A        |
| 8 a 8,9     | B        |
| 6 a 7,9     | C        |
| 4 a 5,9     | D        |
| menos que 4 | E        |*/

const nota = 8.5;

if (nota >= 9.0 && nota <= 10.0) {
    console.log('Conceito A');
} if (nota >= 8.0 && nota <= 8.9) {
    console.log('Conceito B');
} if (nota >= 6.0 && nota <= 7.9) {
    console.log('Conceito C');
} if (nota >= 4.0 && nota <= 5.9) {
    console.log('Conceito D');
} if (nota <= 3.9) {
    console.log('Conceito E');
}