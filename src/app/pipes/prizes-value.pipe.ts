import { Pipe, PipeTransform } from '@angular/core';
import { ItemPrizeData, ItemData } from 'src/classes/Item';

@Pipe({
    name: 'prizesValue'
})
export class PrizesValuePipe implements PipeTransform {

    transform(value: Array<ItemData>): number {
        let prizesValue = 0;
        (value as Array<ItemPrizeData>).forEach(_prize => prizesValue += _prize.price);
        return prizesValue;
    }

}
