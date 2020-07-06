import { Component, OnInit, Input } from '@angular/core';
import { UniqueItemData } from 'src/classes/Item';

import { categories, categoriesKeys } from 'src/constants/Categories';
import { ActivatedRoute, Router } from '@angular/router';

import { InventoryService } from 'src/app/services/inventory.service';

@Component({
    selector: 'app-inventory-list',
    templateUrl: './inventory-list.component.html',
    styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

    public inventory: Array<UniqueItemData> = [];

    public categories = categories;
    public categoriesKeys = categoriesKeys;

    public activeId: string;

    constructor(private inventoryService: InventoryService, private router: Router) { }

    ngOnInit() {
        this.loadInventory();
        this.router.events.subscribe(router => {
            this.loadInventory();
        });
    }

    async loadInventory() {
        this.inventory = await this.inventoryService.getItems().toPromise();
    }

}
