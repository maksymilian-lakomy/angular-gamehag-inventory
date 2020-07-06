import { ItemTypes } from '../classes/Item';

export interface Category {
    name: string;
}

export const categories: Record<ItemTypes, Category> = {
    [ItemTypes.Chest]: {
        name: 'Skrzynie'
    },
    [ItemTypes.Prize]: {
        name: 'Nagrody'
    }
}
export const categoriesKeys = Object.keys(categories);