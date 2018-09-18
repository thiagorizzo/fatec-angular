// IMPORT
import { Component, OnInit, Output } from '@angular/core';
import { IProduto } from './produto';
import { EventEmitter } from '@angular/core';

// DECORATOR: É uma função que recebe um objeto de configuração
@Component({
    selector: 'app-listar-produtos',
    templateUrl: 'listar-produtos.component.html',
    //styles: [ 'tbody td img { height: 100px; width: 100px; }' ],
    styleUrls: [ 'listar-produtos.component.css' ]
})
// CLASSE
export class ListarProdutosComponent implements OnInit {

    produtoSelecionado = undefined;
    paginaAtual : number = 1;
    private produtosPorPagina : number = 4;
    produtos : IProduto[];
    titulo : string = 'Lista de Produtos';

    @Output()
    produtoSelecionadoChange : EventEmitter<IProduto> = new EventEmitter<IProduto>();

    ngOnInit(): void {
        this.produtos = [
            { codigo: 1, nome: 'World Of Warcraft', preco: 59.90, imagemUrl: 'WorldOfWarcraft.jpg', avaliacao: 5, descricao: 'World of Warcraft é um jogo on-line, (MMORPG) da produtora Blizzard lançado em 2004. O jogo se passa no mundo fantástico de Azeroth.' },
            { codigo: 2, nome: 'Battlefield 1', preco: 79.00, imagemUrl: 'Battlefield1.jpg', avaliacao: 4,  descricao: 'Battlefield 1 é um jogo eletrônico de tiro em primeira pessoa ambientado na Primeira Guerra Mundial, desenvolvido pela EA DICE e publicada pela Electronic Arts.' },
            { codigo: 3, nome: 'League Of Legends', preco: 0.00, imagemUrl: undefined, avaliacao: 3, descricao: 'League of Legends é um jogo online competitivo que mistura a velocidade e a intensidade de um RTS com elementos de RPG.' },
            { codigo: 4, nome: 'Destiny 2', preco: 150.00, imagemUrl: 'Destiny2.jpg', avaliacao: 2, descricao: 'Dos criadores do aclamado jogo Destiny, chega a tão esperada sequência. Um shooter de ação que leva você a uma viagem épica pelo sistema solar.' }
        ];
    }

    setPaginaAtual : (pagina : number) => void =
        (pagina) => {
            let quantidadePaginas = this.produtos.length / this.produtosPorPagina;
            if ((pagina > 0) && (pagina < quantidadePaginas + 1))
                this.paginaAtual = pagina;
        };

    getProdutoInicialPagina : () => number =
        () => { return this.getProdutoFinalPagina() - this.produtosPorPagina; }

    getProdutoFinalPagina : () => number =
        () => { return this.paginaAtual * this.produtosPorPagina; }

    getPaginas : () => number[] =
        () => { return new Array<number>(this.produtos.length / this.produtosPorPagina); }

    possuiProdutos : () => boolean = 
        () => { return this.produtos && this.produtos.length > 0 }

    retornaImagemUrl : (produto : IProduto) => string =
        (produto) => { return produto.imagemUrl ? `http://localhost:4200/assets/images/${produto.imagemUrl}` : 'https://via.placeholder.com/100x100'; }

    selecionarProduto : (produto : IProduto) => void =
        (produto) => { 
            this.produtoSelecionado = produto == this.produtoSelecionado ? undefined : produto; 
            this.produtoSelecionadoChange.emit(this.produtoSelecionado);
        }

    paginaAnterior : () => void =
        () => { this.setPaginaAtual(this.paginaAtual - 1); }

    paginaPosterior : () => void =
        () => { this.setPaginaAtual(this.paginaAtual + 1); }

    getEstilosProduto : (produto : IProduto) => object =
        (produto) => {
            return {
                'produto-selecionado': produto == this.produtoSelecionado
            };
        }
}