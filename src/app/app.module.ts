import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarProdutosComponent } from './produto/listar-produtos.component';
import { TemersPipe } from './pipes/temers.pipe';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';

@NgModule({
  declarations: [
    AppComponent, 
    ListarProdutosComponent,
    TemersPipe,
    AvaliacaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
