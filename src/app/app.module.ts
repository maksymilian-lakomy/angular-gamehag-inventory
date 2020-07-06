import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { ItemsCategoryPipe } from './pipes/items-category.pipe';
import { ItemOverviewComponent } from './item-overview/item-overview.component';
import { ItemActionDirective } from './directives/item-action.directive';
import { KeyPreviewComponent } from './key-preview/key-preview.component';
import { OpenChestComponent } from './open-chest/open-chest.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryListComponent,
    InventoryItemComponent,
    ItemsCategoryPipe,
    ItemOverviewComponent,
    ItemActionDirective,
    KeyPreviewComponent,
    OpenChestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
