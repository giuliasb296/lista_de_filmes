import { BaseFilme } from './obj' 

export class acao extends BaseFilme {
    categoria: string

    constructor(titulo: string, ano: number, categoria: string) {
        super(titulo, ano, categoria)
        this.categoria = categoria
    }
}

export class romance extends BaseFilme {
    categoria: string

    constructor(titulo: string, ano: number, categoria: string) {
        super(titulo, ano, categoria)
        this.categoria = categoria
    }
}


