// IMPORT
import { Component } from '@angular/core';

// DECORATOR: É uma função que recebe um objeto de configuração
@Component({
    selector: 'app-listar-produtos',
    templateUrl: 'listar-produtos.component.html'
})
// CLASSE
export class ListarProdutosComponent {
    produtos : Array<any> = [
        { codigo: 1, nome: 'World Of Warcraft', preco: 59.90, imagemUrl: 'WorldOfWarcraft.jpg' },
        { codigo: 2, nome: 'Battlefield 1', preco: 79.00, imagemUrl: 'Battlefield1.jpg' },
        { codigo: 3, nome: 'League Of Legends', preco: 0.00 },
        { codigo: 4, nome: 'Destiny 2', preco: 150.00, imagemUrl: 'Destiny2.jpg' }
    ];

    titulo : string = 'Lista de Produtos';

    possuiProdutos : () => boolean = 
        () => { return this.produtos && this.produtos.length > 0 };

    retornaImagemUrl : (produto) => string =
        (produto) => { return produto.imagemUrl ? `http://localhost:4200/assets/images/${produto.imagemUrl}` : 'https://via.placeholder.com/100x100'; };
}