import { Component, OnChanges } from "@angular/core";
import { Input } from "@angular/core";
import { SimpleChanges } from "@angular/core";

@Component(
    {
        selector: "avaliacao",
        templateUrl: "avaliacao.component.html",
        styleUrls: ["avaliacao.component.css"]
    }
)
export class AvaliacaoComponent implements OnChanges {
    @Input()
    valor : number;

    ngOnChanges(changes: SimpleChanges) : void {
    }

    getEstrelas : () => any[] =
        () => { return new Array(this.valor); }
}