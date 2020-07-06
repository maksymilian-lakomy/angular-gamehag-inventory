import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UniqueItemData } from 'src/classes/Item';
import { ItemActionDirective, ItemPayload} from 'src/app/directives/item-action.directive';

import { itemTypesActions } from 'src/constants/ItemTypesActions';

@Component({
    selector: 'app-item-overview',
    templateUrl: './item-overview.component.html',
    styleUrls: ['./item-overview.component.scss']
})
export class ItemOverviewComponent implements OnInit {

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private inventoryService: InventoryService, private route: ActivatedRoute, private router: Router) { }

    public item: UniqueItemData;

    @ViewChild(ItemActionDirective, { static: true }) itemAction: ItemActionDirective;

    ngOnInit(): void {
        this.route.params.subscribe(async _params => {
            this.item = await this.inventoryService.getItem(_params['id']);
            this.loadComponent();
        });
    }

    close(): void {
        this.router.navigate(['']);
    }

    loadComponent() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(itemTypesActions[this.item.itemType].component);
        const viewContainerRef = this.itemAction.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<ItemPayload>componentRef.instance).id = this.item.id;
        (<ItemPayload>componentRef.instance).item = this.item;
    }
}
