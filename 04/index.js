let ladoA = 12;
let ladoB = 12;

if (ladoA === 0 && ladoB === 0) {
    console.log('Branco');
} else if (ladoA === 1 && ladoB === 1) {
    console.log('Ás');
} else if (ladoA === 2 && ladoB === 2) {
    console.log('Duque');
} else if (ladoA === 3 && ladoB === 3) {
    console.log('Terno');
} else if (ladoA === 4 && ladoB === 4) {
    console.log('Quadra');
} else if (ladoA === 5 && ladoB === 5) {
    console.log('Quina');
} else if (ladoA === 6 && ladoB === 6) {
    console.log('Sena');
} else {
    console.log('Jogada Inexistente');
}
console.log('FIM');