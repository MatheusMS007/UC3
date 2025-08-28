import PromptSync from "prompt-sync"
const prompt = PromptSync()

console.log('                         Tabela de preços:')
for(let i = 1; i <= 50; i++){
     let preco = 6.99
    preco = i * preco
    console.log(`Quantidade de produto(s): ${i}.           Valor a pagar: ${preco.toFixed(2)} R$`)
}