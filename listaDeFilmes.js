"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj_1 = require("./obj");
var obj_2 = require("./obj");
var listaDeFilmes = [
    new obj_1.Acao('Missão Impossível - Acerto de Contas', 2023, 'Ação'),
    new obj_2.Romance('Cartas para Julieta', 2010, 'Romance'),
];
var recomendarFilmes = function (genero) {
    var resultado = listaDeFilmes.filter(function (filme) { return filme.genero === genero; });
    console.log(resultado);
};
listaDeFilmes.forEach(function (listaDeFilmes) {
    listaDeFilmes.exibirDetalhes();
});
recomendarFilmes("Romance");
