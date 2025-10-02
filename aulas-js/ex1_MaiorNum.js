// imprima o maior numero par e o maior numero impar

const numero = gets();

const { gets, print } = require('./funaux');


const n = gets();

for (let i = 0; i < n; i++) {
    let maiorPar = 0;
    let maiorImpar = 0;
    const numero = gets();

    if (numero % 2 === 0) {
        // é par
        if (numero > maiorPar) {
            maiorPar = numero;
        } else {
            continue;
        }
        
    } else {
        // é ímpar
        if (numero > maiorImpar) {
            maiorImpar = numero;
        } else {
            continue;
        }
    }
}

print(maiorPar);
print(maiorImpar);
