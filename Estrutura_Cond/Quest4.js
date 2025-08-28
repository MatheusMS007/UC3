import PromptSync from "prompt-sync"
const prompt = PromptSync()

let salario, emprest, parc, juros = 0.035
let mes, terc, parcJ
let valort 

salario = Number(prompt('Digite quanto você ganha: '))
emprest = Number(prompt('Qual valor do emprestimo você deseja: '))
parc = Number(prompt('Em quantas parcelas deseja pagar? '))

terc = salario * 0.30
mes = emprest / parc
parcJ = mes + (mes * juros)
valort = parcJ * parc

if(terc < parcJ){
    console.log('Emprestimo negado!')
    console.log('O valor da sua parcela de:', parcJ,'$ é maior que 30% do seu salário!')
}else{
    console.log('Emprestimo aprovado!')
    console.log('Valor solicitado: ', emprest)
    console.log('Total de parcelas: ', parc)
    console.log('Valor do juros: ',juros)
    console.log('Valor total do emprestimo: ',valort)
    console.log('Valor por parfcela: ',parcJ.toFixed(2))
}