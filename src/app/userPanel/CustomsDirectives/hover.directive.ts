import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private element: ElementRef, private renderer2: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer2.addClass(this.element.nativeElement, 'highlighted');
  }

  @HostListener('mouseleave') onMouseOut() {
    this.renderer2.removeClass(this.element.nativeElement, 'highlighted');
  }
}
