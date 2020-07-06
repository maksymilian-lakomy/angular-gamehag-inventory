import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemOverviewComponent } from 'src/app/item-overview/item-overview.component';

const routes: Routes = [
    { path: ':id', component: ItemOverviewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
