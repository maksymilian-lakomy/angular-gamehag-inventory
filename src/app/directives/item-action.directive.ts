import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[item-action]'
})
export class ItemActionDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
