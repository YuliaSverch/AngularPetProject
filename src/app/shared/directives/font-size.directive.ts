import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {

  constructor(
    private renderer2: Renderer2, 
    private elementRef: ElementRef
    ) { }

    @HostListener('click') click() {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'font-size', '30px');
    }

}
