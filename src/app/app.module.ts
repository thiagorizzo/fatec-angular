import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListarProdutosComponent } from './produto/listar-produtos.component';
import { TemersPipe } from './pipes/temers.pipe';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { EditarProdutosComponent } from './produto/editar-produtos.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './principal.component';
import { ProdutosComponent } from './produto/produtos.component';

@NgModule({
  declarations: [
    AppComponent, 
    ListarProdutosComponent,
    TemersPipe,
    AvaliacaoComponent,
    EditarProdutosComponent,
    PrincipalComponent,
    HighlightDirective,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'produtos', component: ProdutosComponent },
      { path: 'produto/:codigo/edit', component: EditarProdutosComponent },
      { path: 'principal', component: PrincipalComponent },
      { path: '', redirectTo: 'principal', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
