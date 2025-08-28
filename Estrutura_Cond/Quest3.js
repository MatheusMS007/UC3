import PromptSync from "prompt-sync"
const prompt = PromptSync()

let valor, valordes
let bonus = 300

valor = Number(prompt('Digite o valor da sua compra: '))

if(valor <= 100){
    console.log('O valor da sua compra não tem desconto!')
}else if(valor >= 101 && valor <= 500){
    valordes = valor * 0.95
    console.log('Valor da sua compra com desconto de 5%: ', valordes.toFixed(2))
}else if(valor > 500){
    valordes = valor * 0.90
    console.log('Valor da sua compra com desconto de 10%: ', valordes.toFixed(2))
}if(valor >= bonus){
    console.log('Você ganhou um cupom bônus para usar na próxima compra!.')
}