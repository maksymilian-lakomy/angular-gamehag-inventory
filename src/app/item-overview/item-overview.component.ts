import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { ActivatedRoute } from '@angular/router';
import { UniqueItemData } from 'src/classes/Item';

@Component({
    selector: 'app-item-overview',
    templateUrl: './item-overview.component.html',
    styleUrls: ['./item-overview.component.scss']
})
export class ItemOverviewComponent implements OnInit {

    constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

    public item: UniqueItemData;

    ngOnInit(): void {
        this.route.params.subscribe(async _params => {
            this.item = await this.inventoryService.getItem(_params['id']);
        });
    }

}
