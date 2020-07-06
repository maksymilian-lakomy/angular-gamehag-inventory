import { Directive, ViewContainerRef } from '@angular/core';
import { ItemData } from 'src/classes/Item';

export interface ItemPayload {
  item: ItemData;
  id: string;
}

@Directive({
  selector: '[item-action]'
})
export class ItemActionDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
