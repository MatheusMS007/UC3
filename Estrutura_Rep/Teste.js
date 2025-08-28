import PromptSync from "prompt-sync"
const prompt = PromptSync()

console.log('Sequência numérica FOR')
for(let i = 1; i <=10; i++){
    console.log(i)
}

console.log('Sequência numérica WHILE')
let y = 1
while(y <= 15){
    console.log(y)
    y = y + 2// o (+2) siginifica a quantidade de números a contar
}

y = 1
while(true){
    console.log(y)
    y = y + 2
    if(y == 15){
        console.log(y)
        break// para parar de uma vez
        //CONTINUE é usado para pular a sequência desejada
    }
}

console.log('Sequência numérica DO WHILE')
let x = 1
do{
    console.log(x)
    x = x + 2
}while(x <= 15)