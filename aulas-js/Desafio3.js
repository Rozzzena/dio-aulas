class Desafio3 {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;

    switch(tipo){
        case "Mago":
            this.ataque = "magia";
            break;
        case "Guerreiro":
            this.ataque = "espada";
            break;
        case "Monge":
            this.ataque = "artes marciais";
            break;
        case "Ninja":
            this.ataque = "shuriken";
            break;
        default:
            this.ataque = "ataque desconhecido";
            break;
    }
  }
  atacar() {
    console.log(`${this.nome} atacou usando ${this.ataque}`);
  }
}

let personagem1 = new Desafio3("Gandalf", 300, "Mago");
let personagem2 = new Desafio3("Aragorn", 87, "Guerreiro");
let personagem3 = new Desafio3("Yoda", 900, "Mestre Jedi");

personagem1.atacar();
personagem2.atacar();
personagem3.atacar();