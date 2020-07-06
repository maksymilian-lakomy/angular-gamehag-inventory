import { Injectable } from '@angular/core';
import { UniqueItemData, ItemData } from 'src/classes/Item';

import { templatePrizes, templateChests } from 'src/constants/TemplateItems';

import { v4 as uuidv4 } from 'uuid';
import { Observable, of } from 'rxjs';

const inventoryStorage = 'inventory';

@Injectable({
    providedIn: 'root'
})
export class InventoryService {

    constructor() { }

    async addItem(item: ItemData) {
        const uniqueItem = this.createUniqueItem(item);
        const items = await this.getItems().toPromise();
        localStorage.setItem(inventoryStorage, JSON.stringify(items.push(uniqueItem)));
    }

    private createUniqueItem(item: ItemData): UniqueItemData {
        const uniqueItem = { id: uuidv4() } as UniqueItemData;
        Object.assign(uniqueItem, item);
        return uniqueItem;
    }

    async removeItem(id: string) {
        const items = await this.getItems().toPromise();
        const index = items.findIndex(_item => _item.id === id);
        if (index === -1)
            console.error(`There is no item with id: ${id}!`)
        items.slice(index, 1);
        localStorage.setItem(inventoryStorage, JSON.stringify(items));
    }

    private createDefaults(): Array<UniqueItemData> {
        const arr =  templateChests.map(_item => this.createUniqueItem(_item));
        arr.push(...templatePrizes.map(_item => this.createUniqueItem(_item)));
        return arr;
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
            console.error(`There is no item with id: ${id}!`);
        return items[index];
    }
}
