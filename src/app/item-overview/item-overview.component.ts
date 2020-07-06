import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { ActivatedRoute } from '@angular/router';
import { UniqueItemData } from 'src/classes/Item';
import { ItemActionDirective } from '../directives/item-action.directive';

import { itemTypesActions } from 'src/constants/ItemTypesActions';

@Component({
    selector: 'app-item-overview',
    templateUrl: './item-overview.component.html',
    styleUrls: ['./item-overview.component.scss']
})
export class ItemOverviewComponent implements OnInit {

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private inventoryService: InventoryService, private route: ActivatedRoute) { }

    public item: UniqueItemData;

    @ViewChild(ItemActionDirective, { static: true }) itemAction: ItemActionDirective;

    ngOnInit(): void {
        this.route.params.subscribe(async _params => {
            this.item = await this.inventoryService.getItem(_params['id']);
            this.loadComponent();
        });
    }

    loadComponent() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(itemTypesActions[this.item.itemType].component);
        const viewContainerRef = this.itemAction.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
    }

}
