// calcular imposto sobre salário
// input: salário, beneficios
// output: valor do imposto

// 0 até 1100 = 5%
// até 2500 = 10%
// acima de 2500 = 15%

// valor liquido = salário + beneficios - imposto
// valLiq = sal + ben - (sal * aliquota)


const { gets, print } = require('./funAux2');


const valorSalarioBruto = gets();
const adicionalBeneficios = gets();

let aliquota = 0;

function calculaAliquota(salario) {
    if (valorSalarioBruto <= 1100) {
        // 5%
        aliquota = 0.05;
    } else if (valorSalarioBruto <= 2500) {
        // 10%
        aliquota = 0.1;
    } else if (valorSalarioBruto > 2500) {
        // 15%
        aliquota = 0.15;
    } else {
        // default
        aliquota = 0;
    }
}

const valorLiquido = valorSalarioBruto + adicionalBeneficios - (valorSalarioBruto * aliquota);

print(valorLiquido);