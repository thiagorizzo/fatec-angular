import { IProduto } from "./produto";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {
    
    private produtosUrl = "http://localhost:8888/Produtos";

    constructor(private http : HttpClient) { }

    getProdutos() : Observable<IProduto[]> {
        return this.http.get<IProduto[]>(this.produtosUrl);
    }
        
    addProduto(produto : IProduto) {
        //this.produtos.push(produto);
    }

    removeProduto(codigo : number) {
        //this.produtos = this.produtos.filter(p => p.codigo != codigo);
    }

    modificaProduto(produto : IProduto) {
        //this.produtos[this.produtos.indexOf(produto)] = produto;
    }
}