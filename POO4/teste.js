import PromptSync from "prompt-sync"
const prompt = PromptSync()
import {Funcionario} from "./Quest1.js"

const novoFun = new Funcionario()
novoFun.nome = prompt("Nome: ")
novoFun.cpf = prompt("CPF: ")
novoFun.dataNascimento = prompt("Data de Nascimento: ")
novoFun.salario = Number(prompt('Qual o seu salário? '))
novoFun.horaExtra = Number(prompt("Quantas horas extras foram feitas? "))
novoFun.calcularSalario()
novoFun.gerarContracheque()