import { Component, OnInit } from '@angular/core';
import { IProduto } from './produto';
import { Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {

  @Input()
  produtoEditar : IProduto;

  ngOnInit() {
  }

  confirmarEdicao : (formulario : NgForm) => void = 
    (formulario) => { console.log(formulario); }

  onAvaliacaoChange : (valor : number) => void =
    (valor) => { this.produtoEditar.avaliacao = valor; }
}
