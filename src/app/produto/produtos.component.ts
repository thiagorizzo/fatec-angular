import { Component, OnInit } from '@angular/core';
import { IProduto } from './produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  produtoSelecionado : IProduto;

  onProdutoSelecionado(produto : IProduto) {
    this.produtoSelecionado = produto;
  }  
}
