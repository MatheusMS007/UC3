// comentario simples
/* comentário com + de uma linha */
import PromptSync from "prompt-sync"

const prompt = PromptSync()
let nome = 'Matheus'

let valor1 = Number(prompt('Digite o valor 1: '))
let valor2 = Number(prompt('Digite o valor 2: '))
let valor3 = Number(prompt('Digite o valor 3: '))
let result = valor1 + valor2 + valor3
let media = (valor1+valor2+valor2)/3

console.log('Heollo world, ', nome,"!")
console.log('Hello world, ' + nome + '!')
console.log(`Hello world, ${nome}!`)
console.log(typeof valor1)// retorna o tipo do dado

console.log(`Resulta da soma do ${valor1} + ${valor2} + ${valor3} = ${result}`)
console.log(`Média: ${media.toFixed(2)}`)//definir a quantidade de casas demais