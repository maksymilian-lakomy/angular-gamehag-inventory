import { Component, OnInit, Input } from '@angular/core';
import { UniqueItemData } from 'src/classes/Item';

import { categories, categoriesKeys } from 'src/constants/Categories';

@Component({
    selector: 'app-inventory-list',
    templateUrl: './inventory-list.component.html',
    styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

    @Input()
    public inventory: Array<UniqueItemData>;

    public categories = categories;
    public categoriesKeys = categoriesKeys;

    constructor() { }

    ngOnInit(): void {
    }

}
