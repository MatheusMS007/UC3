import PromptSync from "prompt-sync"
const prompt = PromptSync()

export class Memoria{
    #tipo
    #frequencia
    #capacidade
    constructor(tipo, frequencia, capacidade){
        this.#tipo = tipo
        this.#frequencia = frequencia
        this.#capacidade = capacidade
    }
    set tipo(novoTipo){
        this.#tipo = novoTipo
    }get tipo(){
        return this.#tipo
    }
    set frequencia(novaFrequencia){
        this.#frequencia = novaFrequencia
    }get frequencia(){
        return this.#frequencia
    }
    set capacidade(novaCapacidade){
        this.#capacidade = novaCapacidade
    }get capacidade(){
        return this.#capacidade
    }
    usarMemoria(){
        let uso = Number(prompt('Quanto de memória está sendo usado(em MB)? '))
        if(uso < this.#capacidade){
            this.#capacidade -= uso
            console.log(`Memória usada: ${uso}MB. Memória restante: ${this.#capacidade}MB.`)
        }else if(uso === this.#capacidade){
            this.#capacidade -= uso
            console.log(`Memória está no limete: ${this.#capacidade}`)
        }else{
            console.log(`Memória insuficiente!`)
        }
    }
    leberarMemoria(){
        let liberar = Number(prompt('Quanto de memória deseja liberar(em MB)? '))
        this.#capacidade += liberar
        console.log(`Memória liberada: ${liberar}. Memória atual: ${this.#capacidade}`)
    }
}

export class Processador{
    #marca
    #modelo
    #nucleo
    #velocidade
    constructor(marca, modelo, nucleo, velocidade){
        this.#marca = marca
        this.#modelo = modelo
        this.#nucleo = nucleo
        this.#velocidade = velocidade
    }
    set marca(novaMarca){
        this.#marca = novaMarca 
    }get marca(){
        return this.#marca
    }
    set modelo(novoModelo){
        this.#modelo = novoModelo
    }get modelo(){
        return this.#modelo
    }
    set nucleo(novoNucleo){
        this.#nucleo = novoNucleo
    }get nucleo(){
        return this.#nucleo
    }
    set velocidade(novaVelocidade){
        this.#velocidade = novaVelocidade
    }get velocidade(){
        return this.#velocidade
    } 
    executarPrograma(){
        console.log(`O processador ${this.#marca} ${this.#modelo}, com ${this.#nucleo} núcleos e velocidade de ${this.#velocidade}GHz está executando um programa.`)
    }
}