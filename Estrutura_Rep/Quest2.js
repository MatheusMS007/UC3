import PromptSync from "prompt-sync"
const prompt = PromptSync()


let termo, ant = 0, atual= 1, prox, i = 1

termo = Number(prompt('Digite quantos termos deseja: '))

while(termo >= i){
    console.log(ant)
    prox = ant + atual
    ant = atual
    atual = prox
    i++
    //console.log(ant)
}