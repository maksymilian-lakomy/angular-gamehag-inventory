import { Pipe, PipeTransform } from '@angular/core';
import { ItemTypes, ItemData } from 'src/classes/Item';

@Pipe({
    name: 'itemsCategory'
})
export class ItemsCategoryPipe implements PipeTransform {

    transform(value: Array<ItemData>, type: ItemTypes): Array<ItemData> {
        return value.filter(_item => _item.itemType == type);
    }

}
