import { IProduto } from "./produto";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {
    
    private produtosUrl = "http://localhost:8888/Produtos";
    private produtoUrl = "http://localhost:8888/Produto";

    constructor(private http : HttpClient) { }

    getProdutos() : Observable<IProduto[]> {
        return this.http.get<IProduto[]>(this.produtosUrl)
                                        .pipe(
                                            tap(data => console.log(JSON.stringify(data))),
                                            catchError(this.handleError)
                                        )
    }

    getProduto(codigo : number) : Observable<IProduto> {
        return this.http.get<IProduto>(this.produtoUrl + `/${codigo}`)
                                        .pipe(
                                            tap(data => console.log(JSON.stringify(data))),
                                            catchError(this.handleError)
                                        )
    }    

    private handleError(err : HttpErrorResponse) {
        // TODO: logging
        console.error(err.message);
        return throwError(err.message);
    }
        
    addProduto(produto : IProduto) {
        return this.http.post<IProduto[]>(this.produtosUrl, produto);
    }

    removeProduto(codigo : number) {
        return this.http.delete<IProduto[]>(this.produtosUrl);
    }

    modificaProduto(produto : IProduto) {
        return this.http.put<IProduto[]>(this.produtosUrl, produto);
    }
}