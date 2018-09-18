import { Component } from '@angular/core';
import { IProduto } from './produto/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  produtoSelecionado : IProduto;

  onProdutoSelecionado(produto : IProduto) {
    this.produtoSelecionado = produto;
  }
}
