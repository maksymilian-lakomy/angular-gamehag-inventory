import { Component, OnInit, Input } from '@angular/core';
import { UniqueItemData } from 'src/classes/Item';

@Component({
    selector: 'app-inventory-item',
    templateUrl: './inventory-item.component.html',
    styleUrls: ['./inventory-item.component.scss']
})
export class InventoryItemComponent implements OnInit {

    @Input()
    item: UniqueItemData;

    constructor() { }

    ngOnInit(): void {
    }

}
