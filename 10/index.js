/*Exercício 10

## Identificando caracteres

Faça um programa que identifica caracteres. Seu programa deverá classificar este único caractere, 
que estará guardado numa variável, em uma das categorias abaixo:

| Categoria | Caractere                             |
| --------- | ------------------------------------- |
| Vogal     | A E I O U a e i o u                   |
| Consoante | Qualquer letra que não seja uma vogal |
| Número    | 1 2 3 4 5 6 7 9 0                     |

Seu programa deverá dizer qual a categoria do caractere. Caso a categoria 
seja **Vogal**, seu programa deverá ainda informar se a vogal é maiúscula
ou minúscula.
*/

const caractere = "z";

if (caractere === 'A') {
    console.log('Vogal Maiúscula');
} if (caractere === 'a') {
    console.log('Vogal Minúscula');
} if (caractere === 'E') {
    console.log('Vogal Maiúscula');
} if (caractere === 'e') {
    console.log('Vogal Minúscula');
} if (caractere === 'I') {
    console.log('Vogal Maíscula');
} if (caractere === 'i') {
    console.log('Vogal Minúscula');
} if (caractere === 'O') {
    console.log('Vogal Maiúscula');
} if (caractere === 'o') {
    console.log('Vogal Minúscula');
} if (caractere === 'U') {
    console.log('Vogal Maiúscula');
} if (caractere === 'u') {
    console.log('Vogal Minúscula');
} if (caractere === '0, 1, 2, 3, 4, 5, 6, 7, 8, 9') {
    console.log('Número');
} if (caractere === 'B', 'b', 'C', 'c', 'D', 'd', 'F', 'f', 'G', 'g', 'H', 'h', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z') {
    console.log('Consoante')
} else {
    console.log('Inexistente')
}
