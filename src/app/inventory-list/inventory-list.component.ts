import { Component, OnInit, Input } from '@angular/core';
import { UniqueItemData } from 'src/classes/Item';

import { categories, categoriesKeys } from 'src/constants/Categories';
import { ActivatedRoute } from '@angular/router';

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

    public activeId: string;

    constructor() { }

    ngOnInit(): void {
        console.log(this.activeId);
    }

}
