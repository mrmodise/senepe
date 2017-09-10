import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[navBarHover]'
})
export class HighlightDirective {

  @Input('navBarHover') highlightColor: string;

  constructor(private el?: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightColor || 'grey');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
