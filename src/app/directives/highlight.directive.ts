import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el?: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('grey');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  @HostListener('mousedown') onMouseDown(){
    this.highlight('black');
  }

  highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
