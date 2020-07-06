import { Component, OnInit, Input } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { ItemChestData } from 'src/classes/Item';
import { ItemPayload } from 'src/app/directives/item-action.directive';
import { Router } from '@angular/router';

@Component({
    selector: 'app-open-chest',
    templateUrl: './open-chest.component.html',
    styleUrls: ['./open-chest.component.scss']
})
export class OpenChestComponent implements OnInit, ItemPayload {

    item: ItemChestData;
    id: string;

    constructor(private inventoryService: InventoryService, private router: Router) { }

    ngOnInit(): void {
    }

    public async openChest() {
        const prize = await this.inventoryService.openChest(this.id);
        this.router.navigate([prize.id]);
    }

}
