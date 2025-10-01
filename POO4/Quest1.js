import PromptSync from "prompt-sync"
const prompt = PromptSync()

// Classe  Pessoa
class Pessoa {
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
        return `Nome: ${this.#nome}\nCPF: ${this.#cpf}\nData de Nascimento: ${this.#dataNascimento}`;
    }
}

// Classe Funcionario 
class Funcionario extends Pessoa {
    cargo
    #salario
    #matricula
    constructor(nome, cpf, dataNascimento, cargo, salario, matricula) {
        super(nome, cpf, dataNascimento)
        this.cargo = cargo
        this.#salario = salario
        this.#matricula = matricula
    }
    set cargo(cargo) {
        this.cargo = cargo
    }get cargo() {
        return this.cargo
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

    calculo_horaExtra(horas) {
        let horaFeitas = Number(prompt("Quantas horas extras foram feitas? "))
        let valorHora = 15 * horaFeitas
        return (`O valor a ser paga em hooras extras é de: R$ ${valorHora}`)
    }
}

// Classe Gerente
class Gerente extends Funcionario {
    setor
    quantidadeEquipe
    constructor(nome, cpf, dataNascimento, cargo, salario, matricula, setor, quantidadeEquipe) {
        super(nome, cpf, dataNascimento, cargo, salario, matricula)
        this.setor = setor
        this.quantidadeEquipe = quantidadeEquipe
    }

    calculoBonus() {
        if (this.quantidadeEquipe >= 10) {
            let bonus = this.#salario * 0.15
            return (`O bônus do gerente é de: R$ ${bonus}`)
        }else{
            let bonus = this.#salario * 0.07
            return (`O bônus do gerente é de: R$ ${bonus}`)
        }
        }
}