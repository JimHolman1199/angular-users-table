import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRemoveBorder]'
})
export class RemoveBorderDirective {
    constructor(private el: ElementRef) {
        el.nativeElement.style.border = 'none';
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
      }
    
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
      }
    
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}