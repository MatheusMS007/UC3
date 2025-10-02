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
export class Funcionario extends Pessoa{
    cargo
    #salario
    #matricula
    desconto
    horaExtra
    constructor(nome, cpf, dataNascimento, cargo, salario, matricula){
        super(nome, cpf, dataNascimento)
        this.cargo = cargo
        this.#salario = salario
        this.#matricula = matricula
    }set salario(salario){
        this.#salario = salario
    }get salario(){
        return this.#salario
    }
    set matricula(matricula){
        this.#matricula = matricula
    }get matricula(){
        return this.#matricula
    }

    calculo_horaExtra(){
        let valorHora = 15 * this.horaExtra
       //console.log(`O valor a ser pago em hooras extras é de: R$ ${valorHora}`)
        return valorHora
    }

    calcularSalario(){
        let horaExtra = this.calculo_horaExtra()
        let salarioFinal
            if(horaExtra > 0){
                this.desconto = (this.#salario * 0.09)
                salarioFinal = this.#salario + horaExtra - this.desconto
                console.log(`O salário com desconto do INSS: R$ ${salarioFinal}`)
            }else{
                this.desconto = (this.#salario * 0.075)
                salarioFinal = this.#salario + horaExtra - this.desconto
                console.log(`O salário com desconto do INSS: R$ ${salarioFinal}`)
            }
        }
    
    gerarContracheque(){
        let horaExtra = this.calculo_horaExtra()
        let salarioFinal = this.#salario + horaExtra - this.desconto
        console.log(`Salário base: ${this.#salario} 
            \nQuantidade de horas extra: ${this.horaExtra} e o valor: ${horaExtra} 
            \nDesconto: ${this.desconto}
            \nSalário final: ${salarioFinal}`)
    }
    
    }
        


// Classe Gerente
export class Gerente extends Funcionario{
    setor
    quantidadeEquipe
    constructor(nome, cpf, dataNascimento, cargo, salario, matricula, setor, quantidadeEquipe){
        super(nome, cpf, dataNascimento, cargo, salario, matricula)
        this.setor = setor
        this.quantidadeEquipe = quantidadeEquipe
    }

    calculoBonus(){
        if (this.quantidadeEquipe >= 10){
            let bonus = this.salario * 0.15
            console.log(`O bônus do gerente é de: R$ ${bonus}`)
        }else{
            let bonus = this.salario * 0.07
            console.log(`O bônus do gerente é de: R$ ${bonus}`)
        }
        }
}