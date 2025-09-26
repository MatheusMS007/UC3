import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { Cliente } from "./Imports.js"

const cliente1 = new Cliente (prompt('Diite o nome do cliente: '), prompt('Digite o endereço: '), prompt("Digite a reda: "))
const cliente2 = new Cliente (prompt('Diite o nome do cliente: '), prompt('Digite o endereço: '), prompt("Digite a reda: "))

cliente1.impressao()
cliente2.impressao()