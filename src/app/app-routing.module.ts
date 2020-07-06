import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemOverviewComponent } from 'src/app/item-overview/item-overview.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';

const routes: Routes = [
    { path: '', component: InventoryListComponent, outlet: 'inventory' },
    { path: ':id', component: ItemOverviewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
