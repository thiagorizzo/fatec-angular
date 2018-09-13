import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarProdutosComponent } from './produto/listar-produtos.component';

@NgModule({
  declarations: [
    AppComponent, 
    ListarProdutosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
