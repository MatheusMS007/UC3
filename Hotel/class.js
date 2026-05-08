import PromptSync from "prompt-sync"
const prompt = PromptSync()

export class QuartoOcupadoError extends Error {
    constructor(quartoNumero, checkIn, checkOut) {
        super(`O Quarto ${quartoNumero} já está reservado no período de ${checkIn.toLocaleDateString('pt-BR')} a ${checkOut.toLocaleDateString('pt-BR')}.`)
        this.name = 'QuartoOcupadoError'
        this.quartoNumero = quartoNumero
        this.checkIn = checkIn
        this.checkOut = checkOut
    }
}

export class DataInvalidaError extends Error {
    constructor(message) {
        super(message)
        this.name = 'DataInvalidaError'
    } 
}

// Classes de Domínio

export class Cliente {
    constructor(nome, cpf, contato) {
        this.nome = nome
        this.cpf = cpf
        this.contato = contato
    }
    mostrarInfo() {
        console.log(Nome: ${this.nome})
        console.log(CPF: ${this.cpf})
        console.log(Contato: ${this.contato})
    }
}

export class Quarto {
    constructor(numero, tipo, precoDiaria) {
        this.numero = numero
        this.tipo = tipo
        this.precoDiaria = precoDiaria
    }
}

export class Reserva {
    constructor(quarto, dataCheckIn, dataCheckOut, cliente) {
        this.quarto = quarto
        this.dataCheckIn = dataCheckIn
        this.dataCheckOut = dataCheckOut
        this.cliente = cliente
    }
    mostrarInfo() {
        console.log('--- DETALHES DA RESERVA ---')
        console.log(Quarto: ${this.quarto.numero} - Tipo: ${this.quarto.tipo} - Preço da Diária: R$${this.quarto.precoDiaria.toFixed(2)})
        console.log(Check-In: ${this.dataCheckIn.toLocaleDateString('pt-BR')})
        console.log(Check-Out: ${this.dataCheckOut.toLocaleDateString('pt-BR')})
        console.log(Cliente: ${this.cliente.nome} (CPF: ${this.cliente.cpf}))
    }
}

export class Pousada {
    constructor(nome, quartos, reservas) {
        this.nome = nome
        this.quartos = quartos
        this.reservas = reservas
    }   
    
    adicionarQuarto(quarto) {
        if (this.quartos.some(q => q.numero === quarto.numero)) {
            console.log(⚠️ Aviso: Quarto de número ${quarto.numero} já existe e não foi adicionado.)
            return
        }
        this.quartos.push(quarto)
        console.log(✅ Quarto ${quarto.numero} adicionado.)
    }
    
    listarQuartos() {
        if (this.quartos.length === 0) {
            console.log('Nenhum quarto cadastrado.')
            return
        }
        console.log('\n--- LISTA DE TODOS OS QUARTOS ---')
        this.quartos.forEach((quarto) => {
            console.log(Quarto ${quarto.numero} - Tipo: ${quarto.tipo} - Preço da Diária: R$${quarto.precoDiaria.toFixed(2)})
        })
    }
    
    validarDatasReserva(dataCheckIn, dataCheckOut) {
        if (dataCheckIn.getTime() >= dataCheckOut.getTime()) {
            throw new DataInvalidaError('Data de Check-Out deve ser posterior à Data de Check-In.')
        }
    }

    verificarQuartoOcupado(quarto, dataCheckIn, dataCheckOut) {
        for (let reserva of this.reservas) {
                if (reserva.quarto.numero === quarto.numero) {
                if ((dataCheckIn < reserva.dataCheckOut) && (dataCheckOut > reserva.dataCheckIn)) {
                    throw new QuartoOcupadoError(quarto.numero, dataCheckIn, dataCheckOut)
                }
            }
        }
    }
    
    adicionarReserva(quarto, checkIn, checkOut, cliente) {
        this.validarDatasReserva(checkIn, checkOut)
        this.verificarQuartoOcupado(quarto, checkIn, checkOut)
        
        const novaReserva = new Reserva(quarto, checkIn, checkOut, cliente)
        this.reservas.push(novaReserva)
        console.log(`\n✅ Reserva do Quarto ${quarto.numero} adicionada com sucesso.`)
    }
}