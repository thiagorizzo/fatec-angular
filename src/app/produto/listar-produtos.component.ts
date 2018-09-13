// IMPORT
import { Component } from '@angular/core';

// DECORATOR: É uma função que recebe um objeto de configuração
@Component({
    selector: 'app-listar-produtos',
    templateUrl: 'listar-produtos.component.html'
})
// CLASSE
export class ListarProdutosComponent {
    produtoSelecionado = undefined;

    produtos : Array<any> = [
        { codigo: 1, nome: 'World Of Warcraft', preco: 59.90, imagemUrl: 'WorldOfWarcraft.jpg', descricao: 'World of Warcraft é um jogo on-line, (MMORPG) da produtora Blizzard lançado em 2004. O jogo se passa no mundo fantástico de Azeroth.' },
        { codigo: 2, nome: 'Battlefield 1', preco: 79.00, imagemUrl: 'Battlefield1.jpg', descricao: 'Battlefield 1 é um jogo eletrônico de tiro em primeira pessoa ambientado na Primeira Guerra Mundial, desenvolvido pela EA DICE e publicada pela Electronic Arts.' },
        { codigo: 3, nome: 'League Of Legends', preco: 0.00, descricao: 'League of Legends é um jogo online competitivo que mistura a velocidade e a intensidade de um RTS com elementos de RPG.' },
        { codigo: 4, nome: 'Destiny 2', preco: 150.00, imagemUrl: 'Destiny2.jpg', descricao: 'Dos criadores do aclamado jogo Destiny, chega a tão esperada sequência. Um shooter de ação que leva você a uma viagem épica pelo sistema solar.' }
    ];

    titulo : string = 'Lista de Produtos';

    possuiProdutos : () => boolean = 
        () => { return this.produtos && this.produtos.length > 0 };

    retornaImagemUrl : (produto) => string =
        (produto) => { return produto.imagemUrl ? `http://localhost:4200/assets/images/${produto.imagemUrl}` : 'https://via.placeholder.com/100x100'; };

    selecionarProduto : (produto) => void =
        (produto) => { this.produtoSelecionado = produto == this.produtoSelecionado ? undefined : produto; }
}