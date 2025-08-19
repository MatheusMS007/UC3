import PromptSync from "prompt-sync"
const prompt = PromptSync()

let idade = prompt(`Digite sua idade: `)
let result = idade * 365
console.log(`A sua idade em dias: ${result}`)