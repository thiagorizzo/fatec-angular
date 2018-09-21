import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarProdutosComponent } from './produto/listar-produtos.component';
import { TemersPipe } from './pipes/temers.pipe';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { EditarProdutosComponent } from './produto/editar-produtos.component';
import { ProdutoService } from './produto/produto.service';

@NgModule({
  declarations: [
    AppComponent, 
    ListarProdutosComponent,
    TemersPipe,
    AvaliacaoComponent,
    EditarProdutosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
