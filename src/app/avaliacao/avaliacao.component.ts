import { Component, OnChanges } from "@angular/core";
import { Input } from "@angular/core";
import { SimpleChanges } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Output } from "@angular/core";

@Component(
    {
        selector: "avaliacao",
        templateUrl: "avaliacao.component.html",
        styleUrls: ["avaliacao.component.css"]
    }
)
export class AvaliacaoComponent implements OnChanges {
    @Input()
    enableEdit : boolean = false;

    @Input()
    valor : number;

    @Output()
    valorChange : EventEmitter<number> = new EventEmitter<number>();

    ngOnChanges(changes: SimpleChanges) : void {

    }

    getEstrelas : () => any[] =
        () => { return new Array(this.valor); }

    getEstrelasUnselected : () => any[] =
        () => { return new Array(5 - this.valor); }

    selecionaEstrelaSelected : (indice : number) => void =
        (indice) => {
            if (!this.enableEdit)
                return;

            let estrelaSelecionada = indice;
            this.valor = estrelaSelecionada;
            this.valorChange.emit(this.valor);
        }

    selecionaEstrelaUnselected : (indice : number) => void =
        (indice) => {
            if (!this.enableEdit)
                return;

            let estrelaSelecionada = this.valor + (indice + 1);
            this.valor = estrelaSelecionada;
            this.valorChange.emit(this.valor);
        }
}