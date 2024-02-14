/*Exercício 16

## Rematrícula Escolar

Para fazer a rematrícula na escola o aluno precisa ser maior de idade ou estar 
acompanhado de um responsável. Sendo assim:

**a)** Faça um programa que verifique se o aluno é maior de idade e realize 
a rematrícula, caso não seja, só será possível acompanhado de um responsável.*/


//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 17;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = true;

if (idadeDoAluno >= 18) {
    console.log('Autorizado a se rematricular.');

} else if (idadeDoAluno <= 17 && possuiResponsavel === false) {
    console.log('Não pode ser rematriculado sem a presença do resposável.');

} else if (idadeDoAluno <= 17 && possuiResponsavel === true) {
    console.log('Responsável presente, aluno pode se rematricular.');
}