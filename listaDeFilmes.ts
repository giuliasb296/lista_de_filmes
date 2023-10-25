import { Acao } from "./obj";
import { Romance } from "./obj";
import { BaseFilme } from "./obj";

const listaDeFilmes : BaseFilme[] = [
    new Acao('Missão Impossível - Acerto de Contas', 2023, 'Ação'),
    new Romance('Cartas para Julieta', 2010, 'Romance'),
]

const recomendarFilmes = (genero:string) => {
    const resultado = listaDeFilmes.filter(filme => filme.genero === genero)
    console.log(resultado)
}

listaDeFilmes.forEach(listaDeFilmes =>{
    listaDeFilmes.exibirDetalhes();
})


recomendarFilmes("Romance");