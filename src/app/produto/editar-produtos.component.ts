import { Component, OnInit } from '@angular/core';
import { IProduto } from './produto';
import { Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {

  @Input()
  produtoEditar : IProduto;

  constructor(private produtoService : ProdutoService) { }

  ngOnInit() {
  }

  confirmarEdicao : (formulario : NgForm) => void = 
    (formulario) => { 
      this.produtoService.modificaProduto(this.produtoEditar);
  }

  onAvaliacaoChange : (valor : number) => void =
    (valor) => { this.produtoEditar.avaliacao = valor; }
}
