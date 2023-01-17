import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';

  @HostBinding('style.backgroundColor') bindHighlightColor = '';
  
  @HostListener('mouseenter') onMouseEnter() {
    this.bindHighlightColor = this.appHighlight;
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.bindHighlightColor = '';
  }
}
