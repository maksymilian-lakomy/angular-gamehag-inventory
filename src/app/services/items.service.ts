import { Injectable } from '@angular/core';
import { ItemPrizeData } from 'src/classes/Item';
import { templatePrizes } from 'src/constants/TemplateItems';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ItemsService {

    constructor() {

    }

    getPrizes(): Observable<ReadonlyArray<ItemPrizeData>> {
        return of(templatePrizes);
    }
}
