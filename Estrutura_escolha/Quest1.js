import PromptSync from "prompt-sync"
const prompt = PromptSync()

let valor, moeda, dolar, euro, peso, libra, franco

moeda = prompt('Qual a moeda que deseja converter: ')
valor = Number(prompt('Digite o valor que deseja converter: '))

switch(moeda){
    case 'Dolar':
        dolar = valor / 5.424
        console.log(`O valor de $${valor} convertido é ${dolar.toFixed(2)}US$: `)
        break
    case 'Euro':
        euro = valor / 6.353
        console.log(`O valor de $${valor} convertido é ${euro.toFixed(2)}€ : `)
        break
    case 'Peso':
        peso = valor / 0.0042
        console.log(`O valor de $${valor} convertido é ${peso.toFixed(2)}$ : `)
        break
    case 'Libra':
        libra = valor / 7.326
        console.log(`O valor de $${valor} convertido é ${libra.toFixed(2)}£: `)
        break
    case 'Franco': 
        franco = valor / 6.753
        console.log(`O valor de $${valor} convertido é ${franco.toFixed(2)}: `)
        break
    default:
        console('Moeda não está disponível!')    
}