import PromptSync from "prompt-sync"
const prompt = PromptSync()

let soma, sub, multi, div, raiz, potenc
let num1, num2, operac, calc

calc = prompt('Escolha uma calculadora AVANÇADA/BÁSICA: ')

operac = prompt('Qaul a operação desejada: ')
num1 = Number(prompt('Digite o primeiro valor: '))
if(operac !== 'Raiz'){
num2 = Number(prompt('Digite o segundo valor: '))
}

switch(calc){
    case 'BÁSICA':
        switch(operac){
            case 'Soma':
                soma = num1 + num2
                console.log(`A soma de ${num1} e ${num2} é de: ${soma} `)
                break
            case 'Subtração':
                sub = num1 - num2
                console.log(`A subtração de ${num1} e ${num2} é de:${sub} `)
                break
            case 'Multiplicação':
                multi = num1 * num2
                consolelog(`A multiplicação de ${num1} e ${num2} é de:${multi} `)
            case 'Divisão':
                while(num2 === 0){
                    console.log('Digite um novo valor!')
                    num2 = Number(prompt('Digite o segundo valor: '))
                }
                    div = num1 / num2
                    console.log(`A divisão de ${num1} e ${num2} é de: ${div.toFixed(2)}`)
        }
        break
        case 'AVANÇADA':
            switch('AVANÇADA'){

            }
    }