import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class AppDelayDirective {

  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>) { }

  @Input()
  set appDelay(time: number) {
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, time);
  }
}
