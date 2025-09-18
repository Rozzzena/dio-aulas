class formaDeBolo{
    constructor(saborDaMassa, saborRecheio, saborCobertura){
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
        this.saborCobertura = saborCobertura;
    }
    escrever(){
        console.log(`Bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio} e cobertura de ${this.saborCobertura}.`);
    }
}

let boloFesta = new formaDeBolo("chocolate", "morango", "chantilly");