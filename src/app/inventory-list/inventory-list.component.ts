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

    constructor(private inventoryService: InventoryService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.loadInventory();
        this.activeId = this.router.url.slice(1, this.router.url.length); // This should be changed
        this.router.events.subscribe(async () => {
            this.loadInventory();
            this.activeId = this.router.url.slice(1, this.router.url.length); // Like above
        });
    }

    async loadInventory() {
        this.inventory = await this.inventoryService.getItems().toPromise();
    }

}
