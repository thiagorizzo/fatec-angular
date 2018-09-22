import { Directive, OnInit, ElementRef, Input, HostBinding } from "@angular/core";
import { Renderer } from "@angular/core";
import { HostListener } from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
    
    constructor(private el : ElementRef, private renderer : Renderer) { };

    ngOnInit(): void { }

    @HostBinding("class.isOver")
    isOver : boolean = false;

    @Input()
    highlight : string;

    @HostListener('mouseover')
    onMouseOver() {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.highlight);
        this.isOver = true;   
    }

    @HostListener('mouseleave')
    onMouseOut() {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', null);
        this.isOver = false;
    }    
}



