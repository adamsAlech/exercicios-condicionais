const jogada1 = 'pedra';
const jogada2 = 'tesoura';

if (jogada2 === 'pedra' && jogada1 === 'pedra') {
    //empate
    console.log('empate');

} else if (jogada2 === 'pedra' && jogada1 === 'tesoura') {
    //ganha
    console.log('ganha');

} else if (jogada2 === 'pedra' && jogada1 === 'papel') {
    //perde
    console.log('perde');

} else if (jogada1 === 'pedra' && jogada2 === 'pedra') {
    console.log('empate');

} else if (jogada1 === 'pedra' && jogada2 === 'tesoura') {
    console.log('ganha');

} else if (jogada1 === 'pedra' && jogada2 === 'papel') {
    console.log('perde');
} else {
    console.log('jogada errada')
}