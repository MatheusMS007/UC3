import PromptSync from "prompt-sync"
const prompt = PromptSync()

let radar = Number(prompt('Qual a velocidade permitida na via? '))
let veloc = Number(prompt('Qaul a velocidade medida pelo carro? '))
let multa = radar + (radar * 0.10)
if(veloc > radar && veloc <= multa){
    console.log(veloc, 'Km/h. Atenção: acima do permitido, multa leve!')
}if(veloc <= radar){
    console.log(veloc, 'Km/h. Velocidade dentro do permitido!')
}else if(veloc > multa){
    console.log(veloc, 'Km/h. Atenção: acima do permitido, multa grave!')
}