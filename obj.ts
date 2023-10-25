export class BaseFilme {
    titulo: string;
    ano: number;
    genero: string
    constructor(titulo: string, ano: number, genero: string) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
    }
    exibirDetalhes(): void {
        console.log(`Titulo: ${this.titulo}, ano: ${this.ano}, genero: ${this.genero}`)
    }
}

export class Acao extends BaseFilme {
    genero: string = 'Ação';
}

export class Romance extends BaseFilme {
    genero: string = 'Romance';
}