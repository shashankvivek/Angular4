import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() msg: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')onmouseenter(){
    this.highlight('red', this.msg);
  }

  @HostListener('mouseleave') onmouseleave(){
    this.highlight(null, null);
  }

  highlight(color: string, msg: string) {
    this.el.nativeElement.style.backgroundColor = color;
    const data = this.el.nativeElement.innerHTML;
    this.el.nativeElement.innerHTML = (msg === null) ? 'Hello ' : data + msg;
  }
}
