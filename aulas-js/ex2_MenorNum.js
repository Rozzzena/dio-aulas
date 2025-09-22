// imprima o menor numero par e o menor numero impar

const numero = gets();

const { gets, print } = require('./funaux');


const n = gets();
let menorPar = 0;
let menorImpar = 0;


for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        // é par
        if (numero < menorPar) {
            menorPar = numero;
        } else {
            continue;
        }

    } else if (numero == 0) {
        menorPar = 0;
        
    } else {
        // é ímpar
        if (numero < menorImpar) {
            menorImpar = numero;
        } else {
            continue;
        }
    }
}

print(menorPar);
print(menorImpar);