/*
## Isenção de impostos

Segundo a receita federal, algumas pessoas são isentas do pagamento de imposto de renda 
(IR). Simplificamos aqui quem são essas pessoas:

- Pessoas portadores de alguma doença grave
- Pessoas que já estão aposentadas
- Para pessoa não esteja isenta, avalia-se seus rendimentos tributáveis ao longo do ano. 
Na condição em que o total de rendimentos seja **superior** a R$ 28.559,70, a pessoa deve 
pagar imposto de renda, caso contrário, não.

Faça um programa que determine se a pessoa deve pagar IR ou não.

- Caso a pessoa não deva pagar IR por pertencer ao grupo de pessoas isentas, 
imprima na tela **ISENTA**
- Caso a passoa não deva pagar IR por nao ter o rendimento mínimo necessário, 
imprima na tela **VAZA LEAO! JA TA DIFICIL SEM VOCE**
- Caso a pessoa deva pegar IR imprima na tela **PEGA LEAO**/

const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2100000; //emCentavos

//seu código aqui
if (aposentada === false && portadoraDeDoenca === false && totalDeRendimentos >= 28_559_70) {
    console.log('PEGA LEÃO');

} else if (aposentada === false && portadoraDeDoenca === false && totalDeRendimentos < 28_559_78) {
    console.log('VAZA DAQUI LEÃO, JÁ ESTÁ DIFICIL SEM VOCÊ');

} else if (!aposentada === false || !portadoraDeDoenca === false) {
    console.log('ISENTA');
}
