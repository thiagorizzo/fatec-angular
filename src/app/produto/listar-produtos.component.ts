// IMPORT
import { Component, OnInit, Output } from '@angular/core';
import { IProduto } from './produto';
import { EventEmitter } from '@angular/core';
import { ProdutoService } from './produto.service';

@Component({
    selector: 'app-listar-produtos',
    templateUrl: 'listar-produtos.component.html',
    //styles: [ 'tbody td img { height: 100px; width: 100px; }' ],
    styleUrls: [ 'listar-produtos.component.css' ]
})
export class ListarProdutosComponent implements OnInit {

    produtoSelecionado = undefined;
    paginaAtual : number = 1;
    private produtosPorPagina : number = 2;
    produtos : IProduto[];
    titulo : string = 'Lista de Produtos';

    constructor(private produtoService : ProdutoService) { }

    @Output()
    produtoSelecionadoChange : EventEmitter<IProduto> = new EventEmitter<IProduto>();

    ngOnInit(): void {
        this.getProdutos();
    }

    private getProdutos() : void {
        this.produtoService.getProdutos()
                                  .subscribe(
                                        (data) => this.produtos = data
                                    );
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
        (produto) => { return produto.imagemUrl ? produto.imagemUrl : 'https://via.placeholder.com/100x100'; }

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