import PromptSync from "prompt-sync"
const prompt = PromptSync()

export class Cliente{
    #nome
    #endereco
    #renda
    constructor(nome, endereco, renda){
        this.#nome = nome
        this.#endereco = endereco
        this.#renda = renda
    }
    set nome(novoNome){
        this.#nome = novoNome
    }
        get nome(){
        return this.#nome
    }
    set endereco(novoEndereco){
        this.#endereco = novoEndereco
    }
    get endereco(){
        return this.#endereco
    }
    set renda(novaRenda){
        this.#renda = novaRenda
    }
    get renda(){
        return this.#renda
    }
    impressao(){
        console.log(`O cliente: ${this.#nome}. \nEndereço do cliente: ${this.#endereco}. \nRenda do cliente: ${this.#renda}`)
    }
}

//const cliente1 = new Cliente (prompt('Diite o nome do cliente: '), prompt('Digite o endereço: '), prompt("Digite a reda: "))
//const cliente2 = new Cliente (prompt('Diite o nome do cliente: '), prompt('Digite o endereço: '), prompt("Digite a reda: "))


