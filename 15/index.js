/*Exercício 15

## Nome para exibição

Uma pessoa pode ter nome, sobrenome e/ou apelido.
Escreva um código que imprima no console apenas o apelido (se o apelido estiver preenchido),
 ou primeiro nome + sobrenome (se o sobrenome estiver preenchido), ou apenas o primeiro 
 nome (que no nosso programa é obrigatório e deverá sempre estar preenchido).

**Importante:** Neste exercício, não deveremos utilizar nenhum operador de comparação, 
nem de igualdade e nem de identidade. Para este exercício deveremos utilizar apenas o 
conceito de **truthiness**. */

const primeiroNome = "Mario";
const sobrenome = "Bros";
const apelido = "";

if (apelido) {
    console.log(apelido);

} else if (sobrenome) {
    console.log(primeiroNome + ' ' + sobrenome);

} else if (primeiroNome) {
    console.log(primeiroNome);
}