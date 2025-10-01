import PromptSync from "prompt-sync"
const prompt = PromptSync()

class Transporte{
    #capacidade

    constructor(cap){
        this.#capacidade = cap
    }

    set capacidade(cap){
        this.#capacidade = cap
    }

    get capacidade(){
        return this.#capacidade
    }

    imprimir(){
        console.log(`Capacidade: ${this.#capacidade}`)
    }
}

class Aereo extends Transporte{// Classe Areo herdou da Classe Transporte
    medidorAltitude
    constructor(cap, alt){
        super(cap)
        this.medidorAltitude = alt
    }

    imprimir(){
        super.imprimir()
        console.log(`Medidor de Altitude: ${this.medidorAltitude}`)
    }
}

class Aviao extends Aereo{// Classe Avião herdou da Classe Aereo
    caixaPreta
    qtdePoltronas
    qtdeTurbinas

    constructor(alt, caixaPreta, qtdePoltronas, qtdeTurbinas){
        super(null, alt)
        this.caixaPreta = caixaPreta
        this.qtdePoltronas = qtdePoltronas
        this.qtdeTurbinas = qtdeTurbinas
    }

    imprimir2(){
        super.imprimir()
        console.log(`Caixa preta: ${this.caixaPreta}\n Quantidade de Poltronas: 
            ${this.qtdePoltronas}\n Quantidade de turbinas: ${this.qtdeTurbinas}`)
    }
}

let gol = new Aviao(1000, "sim", 200, 4)

 gol.capacidade = 200 // atributo da classe Transporte
// gol.medidorAltitude = 1000 // atributo da classe Aereo
gol.imprimir() // método da classe Aereo
// gol.qtdePoltronas = 180 // atributo da classe avião
gol.imprimir2() // método da classe Avião

