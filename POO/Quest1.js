import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { Cliente } from "./Imports1.js"

const cliente1 = new Cliente (prompt('Diite o nome do cliente: '), prompt('Digite o endereço: '), prompt("Digite a renda: "))
const cliente2 = new Cliente (prompt('Diite o nome do cliente: '), prompt('Digite o endereço: '), prompt("Digite a renda: "))

cliente1.impressao()
cliente2.impressao()