import { ItemTypes } from 'src/classes/Item';
import { Type } from '@angular/core';
import { KeyPreviewComponent } from 'src/app/key-preview/key-preview.component';
import { OpenChestComponent } from 'src/app/open-chest/open-chest.component';

export const itemTypesActions: Readonly<Record<ItemTypes, {
    component: Type<any>;
}>> = {
    [ItemTypes.Chest]: {
        component: OpenChestComponent,
    },
    [ItemTypes.Prize]: {
        component: KeyPreviewComponent,
    }
}