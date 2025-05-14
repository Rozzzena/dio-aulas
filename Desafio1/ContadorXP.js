console.log("Olá, Jogador!");

var nome;
xpAtual = 0;
var tier;

function contadorDeXP() {
    nome = prompt("Qual é o seu nome?");
    alert("Seja bem-vindo(a) " + nome + " ao contador de XP!");
    alert("Vamos começar!");
xpAtual += parseInt(prompt("Quantos pontos de XP você ganhou?"), 10);

if (xpAtual < 1000 && xpAtual >= 0) {
    tier = "Ferro";
} else if (xpAtual > 1000 && xpAtual <= 2000) {
        tier = "Bronze";
    } else if (xpAtual > 2000 && xpAtual <= 5000) {
        tier = "Prata";
    } else if (xpAtual > 5000 && xpAtual <= 7000) {
        tier = "Ouro";
    } else if (xpAtual > 7000 && xpAtual <= 8000) {
        tier = "Platina";
    } else if (xpAtual > 8000 && xpAtual <= 9000) {
        tier = "Ascendente";
    } else if (xpAtual > 9000 && xpAtual <= 10000) {
        tier = "Imortal";
    }
    } else if (xpAtual > 10000) {
        tier = "Radiante";
    } else {
    } else if (xpAtual > 10000) {
        tier = "Radiante";
    } else {
        alert("XP inválido!");
    }
    alert("Parabéns, " + nome + "! Você está no tier: " + tier);
}
