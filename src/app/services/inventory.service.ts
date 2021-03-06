import { Injectable } from '@angular/core';
import { UniqueItemData, ItemData } from 'src/classes/Item';

import { defaultItems } from 'src/constants/TemplateItems';

import { v4 as uuidv4 } from 'uuid';
import { Observable, of } from 'rxjs';
import { ItemsService } from './items.service';

const inventoryStorage = 'inventory';

@Injectable({
    providedIn: 'root'
})
export class InventoryService {
    constructor(private itemsService: ItemsService) { }

    async openChest(chestId: string): Promise<UniqueItemData> {
        const items = await this.itemsService.getPrizes().toPromise();

        const prizeIndex = Math.floor(Math.random() * items.length);

        // Because of a localStorage methods are called synchronously. In more real life example it would be Promise.all(). 
        const newItem = await this.addItem(items[prizeIndex]);
        await this.removeItem(chestId);

        return newItem;
    }

    private createUniqueItem(item: ItemData): UniqueItemData {
        const uniqueItem = { id: uuidv4() } as UniqueItemData;
        Object.assign(uniqueItem, item);

        return uniqueItem;
    }

    async addItem(item: ItemData): Promise<UniqueItemData> {
        const uniqueItem = this.createUniqueItem(item);
        const items = await this.getItems().toPromise();
        items.push(uniqueItem);
        localStorage.setItem(inventoryStorage, JSON.stringify(items));

        return uniqueItem;
    }

    async removeItem(id: string) {
        const items = await this.getItems().toPromise();
        const index = items.findIndex(_item => _item.id === id);

        if (index === -1)
            throw new Error(`There is no item with id: ${id}!`);

        items.splice(index, 1);
        localStorage.setItem(inventoryStorage, JSON.stringify(items));
    }

    getItems(): Observable<Array<UniqueItemData>> {
        if (localStorage.getItem('visited') == 'false' || localStorage.getItem('inventory') === null) {
            localStorage.setItem(inventoryStorage, JSON.stringify(this.createDefaults()));
            localStorage.setItem('visited', 'true');
        }
        return of(JSON.parse(localStorage.getItem('inventory')) as Array<UniqueItemData>);
    }

    async getItem(id: string): Promise<UniqueItemData> {
        const items = await this.getItems().toPromise();
        const index = items.findIndex(_item => _item.id === id);
        if (index === -1)
            throw new Error(`There is no item with id: ${id}!`);
        return items[index];
    }

    private createDefaults(): Array<UniqueItemData> {
        return defaultItems.map(_item => this.createUniqueItem(_item));
    }

}
