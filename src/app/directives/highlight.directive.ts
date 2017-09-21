import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appNavBarHover]'
})
export class HighlightDirective {

  @Input() appNavBarHover: string;

  constructor(private el?: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.appNavBarHover || 'grey');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  /**
   * highlights DOM element to the specified color
   * @param {string} color
   */
  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
