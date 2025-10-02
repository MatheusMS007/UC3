import PromptSync from "prompt-sync"
const prompt = PromptSync()

// Classe  Pessoa
export class Pessoa {
    #nome
    #cpf
    #dataNascimento
    constructor(nome, cpf, dataNascimento) {
        this.#nome = nome
        this.#cpf = cpf
        this.#dataNascimento = dataNascimento
    }
    set nome(nome) {
        this.#nome = nome
    }get nome() {
        return this.#nome
    }
    set cpf(cpf) {
        this.#cpf = cpf
    }get cpf() {
        return this.#cpf
    }
    set dataNascimento(dataNascimento) {
        this.#dataNascimento = dataNascimento
    }get dataNascimento() {
        return this.#dataNascimento
    }

    mostrarInformacoes() {
        console.log(`Nome: ${this.#nome}\nCPF: ${this.#cpf}\nData de Nascimento: ${this.#dataNascimento}`)
    }
}

// Classe Funcionario 
export class Funcionario extends Pessoa {
    cargo
    #salario
    #matricula
    constructor(nome, cpf, dataNascimento, cargo, salario, matricula) {
        super(nome, cpf, dataNascimento)
        this.cargo = cargo
        this.#salario = salario
        this.#matricula = matricula
    }
  
    
    set salario(salario) {
        this.#salario = salario
    }get salario() {
        return this.#salario
    }
    set matricula(matricula) {
        this.#matricula = matricula
    }get matricula() {
        return this.#matricula
    }

    calculo_horaExtra() {
        let horaFeitas = Number(prompt("Quantas horas extras foram feitas? "))
        let valorHora = 15 * horaFeitas
        console.log(`O valor a ser paga em hooras extras é de: R$ ${valorHora}`)
    }
}

// Classe Gerente
export class Gerente extends Funcionario {
    constructor(nome, cpf, dataNascimento, cargo, salario, matricula, setor, quantidadeEquipe) {
        super(nome, cpf, dataNascimento, cargo, salario, matricula)
        this.setor = setor
        this.quantidadeEquipe = quantidadeEquipe
    }

    calculoBonus() {
        if (this.quantidadeEquipe >= 10) {
            let bonus = this.salario * 0.15
            console.log(`O bônus do gerente é de: R$ ${bonus}`)
        }else{
            let bonus = this.salario * 0.07
            console.log(`O bônus do gerente é de: R$ ${bonus}`)
        }
        }
}

export class Diretor extends Funcionario{
    #partLucros
    constructor(nome, cpf, dataNascimento, cargo, salario, matricula, partLucros, departamento, tempoDirecao){
        super(nome, cpf, dataNascimento, cargo, salario, matricula)
        this.#partLucros = partLucros
        this.departamento = departamento
        this.tempoDirecao = tempoDirecao
    }
    
    calculoGratificacao(){
        let apto = prompt("O diretor está apto para receber o bônus(Sim/Não)? ").toUpperCase()
        if(apto === 'SIM'){
            let tempEmpresa = Number(prompt("Quantos anos de empresa? "))
        if(tempEmpresa >= 5){
            let bonus = this.salario * 0.30
            console.log(`Bônus é de: ${bonus}`)
        }else if(tempEmpresa < 5 && tempEmpresa > 2){
            let bonus = this.salario * 0.25
            console.log(`Bônus é de: ${bonus}`)
        }else if(tempEmpresa < 2){
            let bonus = this.salario * 0.20
        }
    }
}
}