import PromptSync from "prompt-sync"
const prompt = PromptSync()

let consumo, venci

consumo = Number(prompt('Digite seu consumo em KWh:'))
venci = prompt('Seu pagamento está em atraso (s/n): ')

if(consumo <= 100){
    consumo = consumo * 1.20
    console.log('Valor total a pagar: ', consumo)
}else if( consumo > 100){
    consumo = consumo *1.70
    console.log('Valor total a pagar: ', consumo)
}if(venci === 's'){
    consumo = consumo * 1.05
    console.log('Seu valor atualizado com atraso é : ', consumo.toFixed(2))
}