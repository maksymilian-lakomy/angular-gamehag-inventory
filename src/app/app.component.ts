import { Component } from '@angular/core';
import { InventoryService } from './services/inventory.service';
import { UniqueItemData } from 'src/classes/Item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-gamehag-inventory';

    public inventory: Array<UniqueItemData>;

    constructor(private inventoryService: InventoryService) {
        this.inventoryService.getItems().subscribe(_inventory => this.inventory = _inventory);
    }
}
