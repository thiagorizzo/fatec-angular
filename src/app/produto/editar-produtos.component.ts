import { Component, OnInit, OnChanges } from '@angular/core';
import { IProduto } from './produto';
import { Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {

  @Input()
  produtoEditar : IProduto;

  @Input()
  IsEditar : boolean;

  constructor(private route : ActivatedRoute, private produtoService : ProdutoService) { }

  ngOnInit() {
    if (this.IsEditar == null) throw new Error("Attribute 'IsEditar' is required"); 

    let codigoParameto = +this.route.snapshot.paramMap.get('codigo');
    if (codigoParameto)
      this.produtoService.getProduto(codigoParameto)
                        .subscribe(
                          data => this.produtoEditar = data
                        );
  }

  confirmarEdicao : (formulario : NgForm) => void = 
    (formulario) => { 
      this.produtoService.modificaProduto(this.produtoEditar);
  }

  onAvaliacaoChange : (valor : number) => void =
    (valor) => { this.produtoEditar.avaliacao = valor; }
}
